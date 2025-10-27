// Base URL for the API
const BASE_URL = 'https://dev2-dot-select-stays-chatbot-v02.wl.r.appspot.com';

// API endpoints
const ENDPOINTS = {
  WHITE_LABEL_CSS: '/white_label/css'
};

// Authentication tokens
const AUTH_CONFIG = {
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjE0ODI0NjQsIm5iZiI6MTc2MTQ4MjQ2NCwianRpIjoiZGY4MzJkODUtYmQ2NC00NWQ1LTg2ODUtMWE2M2Q1N2U1MjQzIiwiZXhwIjoxNzY0MDc0NDY0LCJpZGVudGl0eSI6IjAwbWFzdGVyX3Rlc3RfY2l0eSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7InJvbGUiOiJhZG1pbiIsImVtYWlsIjoiMDBtYXN0ZXJAdGVzdC5jaXR5In19.9M3UvveCfLBgSQw_3yUm0zU00WzSZrZsVmiKi73R724',
  apiKey: '4hIYUIEW0mqka8Xi7bxaDKaswOh7ll1KUUyGL17THvtDho3ujR'
};

/**
 * Send branding configuration to the white label CSS API
 * @param {Object} requestData - The branding configuration data
 * @param {string} requestData.domain - Domain name (mandatory)
 * @param {string} requestData.key - API key (mandatory)
 * @param {Object} requestData.css_properties - CSS properties object
 * @returns {Promise<Object>} - API response
 */
export const saveWhiteLabelCSS = async (requestData) => {
  try {
    const url = `${BASE_URL}${ENDPOINTS.WHITE_LABEL_CSS}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_CONFIG.accessToken}`,
        'X-API-Key': AUTH_CONFIG.apiKey
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: data
    };
  } catch (error) {
    console.error('Error saving white label CSS:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Transform brand colors to the required API format
 * @param {Object} brandColors - Brand colors object from the component
 * @param {string} domain - Domain name
 * @param {string} key - API key
 * @returns {Object} - Formatted request body
 */
export const transformBrandColorsToAPI = (brandColors, domain, key) => {
  return {
    domain: domain,
    key: key,
    css_properties: {
      background: {
        primary: brandColors.primaryBg,
        secondary: brandColors.secondaryBg,
        cards: brandColors.cardBg,
        hover: brandColors.hoverBg,
        input: brandColors.inputBg,
        textarea: brandColors.textareaBg,
        dropdown: brandColors.dropdownBg
      },
      text: {
        primary: brandColors.primaryText,
        secondary: brandColors.secondaryText,
        tertiary: brandColors.tertiaryText,
        quaternary: brandColors.quaternaryText,
        disabled: brandColors.disabledText,
        placeholder: brandColors.placeholderText
      },
      borders: {
        primary: brandColors.primaryBorder,
        active: brandColors.activeBorder,
        inactive: brandColors.inactiveBorder
      },
      interactive: {
        primary_blue: brandColors.primaryBlue,
        primary_hover: brandColors.primaryBlueHover,
        light_blue: brandColors.lightBlue,
        secondary_button: brandColors.secondaryButtonBg,
        secondary_hover: brandColors.secondaryButtonHover
      },
      status: {
        success_green: brandColors.successGreen,
        current_green: brandColors.currentGreen,
        warning_orange: brandColors.warningOrange,
        error_red: brandColors.errorRed,
        destructive_red: brandColors.destructiveRed
      },
      components: {
        toggle_off: brandColors.toggleOff,
        cancel_button: brandColors.cancelButton,
        cancel_hover: brandColors.cancelHover,
        dropdown_select: brandColors.dropdownSelect,
        table_header: brandColors.tableHeader,
        table_row_hover: brandColors.tableRowHover
      }
    }
  };
};