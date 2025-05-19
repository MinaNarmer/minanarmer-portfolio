import { init, send } from 'emailjs-com';

// معلومات EmailJS الخاصة بك
const SERVICE_ID = 'service_o5jp0wl';
const TEMPLATE_ID = 'template_681gm67';
const USER_ID = 'GA9iAVteDRRKGvMFw';

// تهيئة EmailJS
init(USER_ID);

// نوع بيانات النموذج
export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * إرسال رسالة بريد إلكتروني باستخدام EmailJS
 */
export const sendEmail = async (data: EmailFormData): Promise<boolean> => {
  try {
    // إعداد البيانات التي سترسل إلى القالب
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: 'Mina', // يمكن تغيير هذا
      reply_to: data.email,
    };

    // إرسال البريد الإلكتروني
    const response = await send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    
    console.log('Email sent successfully!', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};