export interface SiteConfig {
  appTitle: string;
  appDescription: string;
  brandImageUrl?: string;
  defaultBusinessName?: string;
  defaultContactEmail?: string;
  defaultContactPhone?: string;
  appUrl?: string;
  // Developer contact details for escalations (admins → developers)
  developerSupportEmail?: string;
  developerSupportPhone?: string;
  developerSupportName?: string;
  // AI support display information
  aiSupportName?: string;
  aiSupportDescription?: string;
}

export const SITE_CONFIG: SiteConfig = {
  appTitle: process.env.NEXT_PUBLIC_APP_TITLE || 'Sasage Products',
  appDescription:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Your trusted online shop of quality sweet malambe from baobab fruit. We source the finest baobab fruits to bring you naturally sweet, nutrient-rich malambe that captures the authentic taste of African heritage. Each batch is carefully processed to preserve the natural goodness and unique flavor that makes malambe a beloved delicacy.',
  brandImageUrl:
    process.env.NEXT_PUBLIC_BRAND_IMAGE_URL || 'https://sasage-products.vercel.app/logo.png',
  defaultBusinessName: process.env.NEXT_PUBLIC_DEFAULT_BUSINESS_NAME || 'Sasage Products',
  defaultContactEmail: process.env.NEXT_PUBLIC_DEFAULT_CONTACT_EMAIL || 'hie@sasage-products.techcure.tech',
  defaultContactPhone: process.env.NEXT_PUBLIC_DEFAULT_CONTACT_PHONE || '+265 981 819 389',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://sasage-products.vercel.app',
  developerSupportEmail: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_EMAIL || 'support@techcure.tech',
  developerSupportName: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_NAME || 'TechCure Support',
  developerSupportPhone: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_PHONE || '+265 981 819 389',
  // AI support show name & description when present
  aiSupportName: process.env.NEXT_PUBLIC_AI_SUPPORT_NAME || 'AI Support',
  aiSupportDescription: process.env.NEXT_PUBLIC_AI_SUPPORT_DESCRIPTION || 'Automated assistance — responses are suggestions. Use Request human support for help.',
};
