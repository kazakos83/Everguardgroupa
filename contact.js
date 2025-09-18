const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    }
  }

  try {
    const data = JSON.parse(event.body)
    
    const {
      name,
      email,
      phone,
      company,
      service,
      urgency,
      message,
      budget
    } = data

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ error: 'Name, email, and message are required' })
      }
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is missing')
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ 
          error: 'Email service not configured - missing API key',
          debug: 'SENDGRID_API_KEY environment variable not set'
        })
      }
    }

    if (!process.env.SENDGRID_FROM_EMAIL) {
      console.error('SENDGRID_FROM_EMAIL is missing')
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ 
          error: 'Email service not configured - missing from email',
          debug: 'SENDGRID_FROM_EMAIL environment variable not set'
        })
      }
    }

    if (!process.env.SENDGRID_TO_EMAIL) {
      console.error('SENDGRID_TO_EMAIL is missing')
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ 
          error: 'Email service not configured - missing to email',
          debug: 'SENDGRID_TO_EMAIL environment variable not set'
        })
      }
    }

    // Initialize SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    // Generate unique inquiry ID
    const inquiryId = `INQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Service display mapping
    const serviceDisplay = {
      'corporate-intelligence': 'Corporate Intelligence',
      'insurance-investigations': 'Insurance Investigations',
      'osint': 'OSINT Services',
      'skip-tracing': 'Skip Tracing',
      'surveillance': 'Surveillance',
      'background-checks': 'Background Checks',
      'other': 'Other Services'
    }[service] || 'General Inquiry'

    // Urgency color mapping
    const urgencyColor = {
      'low': '#10B981',
      'medium': '#F59E0B', 
      'high': '#EF4444',
      'urgent': '#DC2626'
    }[urgency] || '#F59E0B'

    // Admin email template - ENHANCED FOR EVERGUARD
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>🚨 NEW INQUIRY - Everguard Intelligence</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
          .container { max-width: 700px; margin: 0 auto; background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
          .header { text-align: center; border-bottom: 4px solid #DC2626; padding-bottom: 25px; margin-bottom: 30px; background: linear-gradient(135deg, #DC2626, #B91C1C); color: white; margin: -30px -30px 30px -30px; padding: 30px; border-radius: 15px 15px 0 0; }
          .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
          .urgency-badge { display: inline-block; padding: 8px 20px; border-radius: 25px; color: white; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-top: 15px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin: 25px 0; }
          .info-item { background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 5px solid #DC2626; }
          .info-label { font-weight: bold; color: #DC2626; margin-bottom: 8px; font-size: 16px; }
          .message-section { background: #f8f9fa; padding: 25px; border-radius: 12px; margin: 25px 0; border: 2px solid #e9ecef; }
          .footer { text-align: center; margin-top: 30px; padding-top: 25px; border-top: 2px solid #eee; color: #666; font-size: 14px; }
          .cta-button { display: inline-block; background: #DC2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 25px 0; }
          .highlight { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .contact-details { font-size: 18px; line-height: 1.8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🚨 EVERGUARD INTELLIGENCE</div>
            <h1 style="margin: 10px 0; font-size: 24px;">NEW CONTACT FORM SUBMISSION</h1>
            <span class="urgency-badge" style="background-color: ${urgencyColor};">
              ${urgency.toUpperCase()} PRIORITY
            </span>
          </div>

          <div class="highlight">
            <h2 style="margin: 0 0 10px 0; color: #DC2626;">⚡ ACTION REQUIRED</h2>
            <p style="margin: 0; font-weight: bold;">A new ${urgency} priority inquiry has been submitted. Please respond according to priority level.</p>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">👤 CONTACT INFORMATION</div>
              <div class="contact-details">
                <strong>${name}</strong><br>
                📧 <a href="mailto:${email}" style="color: #DC2626; text-decoration: none;">${email}</a><br>
                ${phone ? `📞 <strong>${phone}</strong>` : '📞 No phone provided'}
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-label">🏢 BUSINESS DETAILS</div>
              <div class="contact-details">
                ${company ? `<strong>Company:</strong> ${company}<br>` : 'No company provided<br>'}
                <strong>Service:</strong> ${serviceDisplay}<br>
                ${budget ? `<strong>Budget:</strong> ${budget}` : 'Budget not specified'}
              </div>
            </div>
          </div>

          <div class="message-section">
            <div class="info-label" style="margin-bottom: 15px; font-size: 18px;">📋 PROJECT DETAILS:</div>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
              <p style="margin: 0; white-space: pre-wrap; font-size: 16px; line-height: 1.6;">${message}</p>
            </div>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="mailto:${email}?subject=Re: Your inquiry to Everguard Intelligence (${inquiryId})" class="cta-button" style="color: white; text-decoration: none;">
              📧 RESPOND TO CLIENT
            </a>
          </div>

          <div class="footer">
            <div style="background: #DC2626; color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <p style="margin: 0; font-weight: bold; font-size: 16px;">
                ⚡ PRIORITY: ${urgency === 'urgent' ? 'URGENT - Respond within 24 hours' : urgency === 'high' ? 'HIGH PRIORITY - Respond within 48 hours' : 'Standard response time applies'}
              </p>
            </div>
            <p><strong>📋 Inquiry ID:</strong> ${inquiryId}</p>
            <p><strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}</p>
            <p>This inquiry was submitted through the Everguard Intelligence website contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Client email template
    const responseTime = {
      'urgent': 'within 24 hours',
      'high': 'within 48 hours',
      'medium': 'within 1 business day',
      'low': 'within 2 business days'
    }[urgency] || 'within 1 business day'

    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank you for contacting Everguard Intelligence</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { text-align: center; border-bottom: 3px solid #DC2626; padding-bottom: 20px; margin-bottom: 30px; }
          .logo { color: #DC2626; font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          .highlight-box { background: linear-gradient(135deg, #DC2626, #B91C1C); color: white; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0; }
          .info-box { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #DC2626; margin: 20px 0; }
          .contact-info { background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">EVERGUARD INTELLIGENCE</div>
            <h2 style="margin: 0; color: #333;">Thank You for Your Inquiry</h2>
          </div>

          <p>Dear ${name},</p>
          
          <p>Thank you for contacting Everguard Intelligence. We have successfully received your inquiry regarding <strong>${serviceDisplay}</strong> and will respond ${responseTime}.</p>

          <div class="highlight-box">
            <h3 style="margin: 0 0 10px 0;">Your Inquiry Details</h3>
            <p style="margin: 0;"><strong>Service:</strong> ${serviceDisplay}</p>
            <p style="margin: 5px 0 0 0;"><strong>Priority Level:</strong> ${urgency.charAt(0).toUpperCase() + urgency.slice(1)} Priority</p>
            <p style="margin: 5px 0 0 0;"><strong>Reference ID:</strong> ${inquiryId}</p>
          </div>

          <div class="info-box">
            <h4 style="color: #DC2626; margin-top: 0;">What Happens Next?</h4>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Our team will review your requirements within 2 hours</li>
              <li>We'll prepare a detailed proposal and quote</li>
              <li>One of our senior investigators will contact you directly</li>
              <li>We'll schedule a confidential consultation at your convenience</li>
            </ul>
          </div>

          <div class="contact-info">
            <h4 style="color: #DC2626; margin-top: 0;">Need Immediate Assistance?</h4>
            <p style="margin: 0;"><strong>24/7 Emergency Line:</strong> <a href="tel:+61-1800-EVERGUARD" style="color: #DC2626;">1800-EVERGUARD</a></p>
            <p style="margin: 10px 0 0 0;"><strong>Email:</strong> <a href="mailto:info@everguardgroup.com.au" style="color: #DC2626;">info@everguardgroup.com.au</a></p>
          </div>

          <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border: 1px solid #fecaca; margin: 20px 0;">
            <p style="margin: 0; color: #991b1b;"><strong>🔒 Confidentiality Assured:</strong> All communications are treated with the strictest confidentiality in accordance with our professional and licensing standards.</p>
          </div>

          <div class="footer">
            <p>Best regards,<br><strong>The Everguard Intelligence Team</strong></p>
            <p>Premier Corporate Investigation Services Australia</p>
            <p style="font-size: 12px; color: #999;">This is an automated confirmation email. Please do not reply to this email address.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Log environment variables for debugging (without exposing sensitive data)
    console.log('Environment check:', {
      hasApiKey: !!process.env.SENDGRID_API_KEY,
      hasFromEmail: !!process.env.SENDGRID_FROM_EMAIL,
      hasToEmail: !!process.env.SENDGRID_TO_EMAIL,
      fromEmail: process.env.SENDGRID_FROM_EMAIL,
      toEmail: process.env.SENDGRID_TO_EMAIL
    })

    // Prepare emails with enhanced error handling
    const adminEmail = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: 'Everguard Intelligence Website'
      },
      subject: `🚨 NEW ${urgency.toUpperCase()} PRIORITY INQUIRY - ${name} - ${serviceDisplay}`,
      html: adminEmailHtml
    }

    const clientEmail = {
      to: email,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: 'Everguard Intelligence'
      },
      subject: `Thank you for contacting Everguard Intelligence - We'll respond ${responseTime}`,
      html: clientEmailHtml
    }

    // Send admin email FIRST (priority)
    let adminEmailSent = false
    let clientEmailSent = false
    let adminError = null
    let clientError = null

    try {
      console.log('Attempting to send admin email to:', process.env.SENDGRID_TO_EMAIL)
      const adminResult = await sgMail.send(adminEmail)
      adminEmailSent = true
      console.log('Admin email sent successfully:', adminResult[0].statusCode)
    } catch (error) {
      adminError = error
      console.error('ADMIN EMAIL FAILED:', {
        error: error.message,
        code: error.code,
        statusCode: error.response?.status,
        body: error.response?.body
      })
    }

    // Send client email
    try {
      console.log('Attempting to send client email to:', email)
      const clientResult = await sgMail.send(clientEmail)
      clientEmailSent = true
      console.log('Client email sent successfully:', clientResult[0].statusCode)
    } catch (error) {
      clientError = error
      console.error('CLIENT EMAIL FAILED:', {
        error: error.message,
        code: error.code,
        statusCode: error.response?.status,
        body: error.response?.body
      })
    }

    // Return detailed response
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully',
        inquiryId,
        emailStatus: {
          adminEmailSent,
          clientEmailSent,
          adminError: adminError ? adminError.message : null,
          clientError: clientError ? clientError.message : null
        },
        debug: {
          toEmail: process.env.SENDGRID_TO_EMAIL,
          fromEmail: process.env.SENDGRID_FROM_EMAIL
        }
      })
    }
    
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ 
        error: 'Failed to submit contact form. Please try again.',
        details: error.message
      })
    }
  }
}