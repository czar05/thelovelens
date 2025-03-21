import Messages from './message.js';
const Constants = {
  AVAIALABLE_TIME : {
    AVAIALABLE: 'Available',
    BOOKED: 'Booked',
  },
  BOOKING_STATUS : {
    PENDING: 'Pending',
    CONFIRMED: 'Confirmed',
    CANCELLED: 'Cancelled',
    COMPLETED: 'Completed'
  },
  PAYMENT_STATUS : {
    PENDING: 'Pending',
    SUCCESS: 'Success',
    FAILED: 'Failed'
  },
  PROJECT: {
    NAME: 'SquareRisk'
  },
  CURRENT_ADMIN_VERSION: 'v2',
  TIMEOUT_SECONDS: 30 * 1000,
  DEFAULT_COUNTRY: 'US',
  PORTAL: {
    NAME: 'square risk',
    SLUG: 'SQUARERISK.COM'
  },
  PROJECT_DOMAIN: 'squarerisk.com',
  STATE: {
    ALL: 'All'
  },

  ENVS: {
    DEVELOPMENT: 'development',
    QA: 'qa',
    UAT: 'uat',
    PRODUCTION: 'production',
    LOCAL: 'local',
    LOCAL_UAT: 'local-uat'
  },
  APP_FILES: {
    ACORD_FORMS: 'ACORD_FORMS',
    PREVIOUS_POLICY: 'PREVIOUS_POLICY',
    // LOSS_RUNS: 'LOSS_RUNS',
    OTHER_DOCUMENTS: 'OTHER_DOCUMENTS'
  },
  DEFAUT_SUB_AGENCY_COMMISSION: 75,
  BUCKET_FOLDER_PATH: {
    PRODUCT_ICON_PATH: 'products/icons/',
    SIGNED_QUOTE_PATH: 'company/signed-quotes/',
    UN_SIGNED_QUOTE_PATH: 'company/unsigned-quotes/',
    S3_BUCKET_COMPANY_LOGO_PATH: 'company/logo',
    S3_BUCKET_COMPANY_FILE_PATH: 'company-product/policies',
    S3_BUCKET_COMPANY_DOCUMENTS_PATH: 'company/documents',
    S3_BUCKET_FILE: 'pre-signature-templates',
    S3_BUCKET_SERVICE_REQUEST: 'service-request'
  },
  DEFAULT_PORTAL_ID: 1,
  CACHING_PERIOD: '1 hour',
  TOKEN_EXPIRE_DAYS: '30d',
  ONE_MONTH: '30d',
  ONE_HOUR: '1h',
  ONE_DAY: '1d',
  DEFAULT_LIMIT: 10,
  DEFAULT_CRON_LIMIT: 1000,
  DEFAULT_OFFSET: 0,
  DEFAULT_SORT_COLUMN: 'updatedDate',
  DISTRIBUTION_DEFAULT_SORT_COLUMN: 'applicationId',
  CREATED_DATE_SORT_COLUMN: 'createdDate',
  DEFAULT_COMPANY_SORT_COLUMN: 'name',
  DEFAULT_PRODUCT_LIST_SORT_COLUMN: 'name',
  DEFAULT_LITE_SORT_COLUMN: 'name',
  DEFAULT_PRODUCT_SORT_COLUMN: 'statusOrder',
  ORDER: {
    ASC: 'ASC',
    DESC: 'DESC'
  },

  JOB_STATE: {
    VIEWED: 1,
    SAVED: 2,
    APPLIED: 3,
    INTERVIEW_SCHEDULED: 4,
    INTERVIEWED: 5,
    OFFER_RELEASED: 6
  },

  JOB_STATE_ORDER: [
    {
      currentState: 'VIEWED',
      currentStateId: 1
    },
    {
      currentState: 'SAVED',
      currentStateId: 2
    },
    {
      currentState: 'APPLIED',
      currentStateId: 3
    },
    {
      currentState: 'INTERVIEW_SCHEDULED',
      currentStateId: 4
    },
    {
      currentState: 'INTERVIEWED',
      currentStateId: 5
    },
    {
      currentState: 'OFFER_RELEASED',
      currentStateId: 6
    }
  ],

  DEFAULT_LOCALE: 'en-AU',

  DEFAULT_COMMISSION: {
    AGENT_COMMISSION: 5,
    MGA_COMMISSION: 20
  },

  LOGS: {
    DEUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    CRITICAL_ERROR: 'CRITICAL_ERROR'
  },

  UNWANTED_LOGGING_URLS: [],

  API_METHOD: {
    GET: 'GET',
    POST: 'POST'
  },
  SORT_ORDER: {
    HIGH_TO_LOW: 'HIGH_TO_LOW',
    LOW_TO_HIGH: 'LOW_TO_HIGH'
  },

  ROLE: {
    ADMIN: 'ADMIN',
    CUSTOMER: 'CUSTOMER',
    USER: 'USER',
    AGENT: 'AGENT'
  },

  SOCIAL_NETWORK: {
    GOOGLE: 'GOOGLE',
    FACEBOOK: 'FACEBOOK'
  },

  USER_ROLES: {
    PORTAL_ADMIN: 'PORTAL_ADMIN',
    PORTAL_SUB_ADMIN: 'PORTAL_SUB_ADMIN',
    PORTAL_USER: 'PORTAL_EMPLOYEE',
    AGENCY_ADMIN: 'AGENCY_ADMIN',
    AGENCY_EMPLOYEE: 'AGENCY_EMPLOYEE',
    MGA_ADMIN: 'MGA_ADMIN',
    MGA_EMPLOYEE: 'MGA_EMPLOYEE',
    AGENCY_CUSTOMER: 'AGENCY_CUSTOMER',
    REFERRAL_CUSTOMER: 'REFERRAL_CUSTOMER',
    CUSTOMER_AGENT: 'CUSTOMER_AGENT',
    REFERRAL_ADMIN: 'REFERRAL_ADMIN'
  },
  DEFAULT_TOKEN_LENGTH: 32,
  USER_TYPES: {
    USER: 'USER',
    CUSTOMER: 'CUSTOMER'
  },
  STATUS: {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    DELETED: 'deleted'
  },

  PRODUCT_STATUS: {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    COMING_SOON: 'coming soon'
  },

  SYSTEM_TYPE: {
    INTERNAL: 'internal',
    WEB: 'web',
    API: 'api'
  },

  BUSINESS_TYPES: {
    MGA: 'MGA',
    AGENCY: 'AGENCY',
    PORTAL: 'PORTAL',
    CARRIER: 'CARRIER',
    REFERRAL: 'REFERRAL'
  },
  QUOTE_MODULE_SCREENS: {
    // SELECT_PRODUCT: 'Select Product',
    DATA_COLLECTION: 'Data Collection',
    SELECT_INDICATION: 'Select Indication',
    PREPARE_APPLICATION: 'Prepare Application',
    REVIEW_QUOTE: 'Review Quote',
    SIGNATURE: 'Signature',
    PAYMENT: 'Payment',
    DOWNLOAD_POLICY: 'Download Policy',
    COMPLETED: 'Completed'
  },
  QUOTE_MODULE_SCREENS_V2: {
    DATA_COLLECTION: 'Data Collection',
    REVIEW_QUOTE: 'Review Quote'
  },
  NEW_QUOTE_MODULE_SCREENS: {
    // SELECT_PRODUCT: 'Select Product',
    DATA_COLLECTION: 'Data Collection',
    SELECT_INDICATION: 'Select Indication',
    PREPARE_APPLICATION: 'Prepare Application',
    BIND_QUOTE: 'Bind Quote'
  },
  DISTRIBUTION_STEPS: {
    DATA_COLLECTION: 'Data Collection',
    SELECT_INDICATION: 'Select Indication',
    PREPARE_APPLICATION: 'Prepare Application',
    BIND_QUOTE: 'Bind Quote'
  },
  QUOTE_STEPS_SCREENS: {
    SIGNATURE: 'Sign Proposal',
    PAYMENT: 'Payment',
    DOWNLOAD_POLICY: 'Download Policy'
  },

  DATA_COLLECTION: {
    APPLICATION_STATUS: {
      DRAFT: 'Draft',
      SUBMIT_FOR_QOUTING: 'Submitted for quoting',
      UPDATE: 'Update',
      SUBMIT: 'Submit'
    }
  },

  PREPARE_APPLICATION: {
    APPLICATION_STATUS: {
      DRAFT: 'Draft',
      SUBMIT_FOR_QOUTING: 'Submitted for quoting',
      UPDATE: 'Update',
      SUBMIT: 'Submit'
    }
  },

  QUOTE_REQUEST_STATUS: {
    NEW: 'New',
    FAILED: 'Failed',
    RETRY: 'Retry',
    SUCCESS: 'Success'
  },
  QUOTE_RESPONSE_STATUS: {
    REJECTED: 'Rejected',
    QUOTED: 'Quoted',
    BINDED: 'Binded'
  },
  Transaction: {
    SUCCESS: 'Transaction Success',
    FAILED: 'Transaction Failed',
    PENDING: 'Pending',
    REQUIRES_ACTION: 'Requires action',
    PROCESSING: 'Processing',
    PARTIALLY_FUNDED: 'Partially funded',
    DECLINED_BY_ADMIN: 'Declined by admin'
  },

  STRIPE: {
    STRIPE_PAYMENT_INTENT_STATUS: {
      REQUIRES_PAYMENT_METHOD: 'requires_payment_method',
      REQUIRES_CONFIRMATION: 'requires_confirmation',
      REQUIRES_ACTION: 'requires_action',
      PROCESSING: 'processing',
      REQUIRES_CAPTURE: 'requires_capture',
      CANCELED: 'canceled',
      SUCCEEDED: 'succeeded'
    },
    WEBHOOK_EVENT: {
      PARTIALLY_FUNDED: 'payment_intent.partially_funded',
      PAYMENT_FAILED: 'payment_intent.payment_failed',
      PROCESSING: 'payment_intent.processing',
      REQUIRES_ACTION: 'payment_intent.requires_action',
      SUCCEEDED: 'payment_intent.succeeded'
    }
  },

  MGA_CARRIER_RELATIONSHIP: {
    PARENT_CARRIER: 'parent-carrier',
    PARENT_AGENCY: 'parent-agency',
    PARENT_PORTAL: 'parent-portal'
  },

  SUBMISSION_RESPONSE_DOCUMENT_OPTIONS: {
    POLICY_DOC: 'policy_doc',
    SECURITY_REPORT_DOC: 'security_report',
    APPLICATION_DOC: 'application_doc',
    INVOICE_DOC: 'invoice_doc',
    PROPOSAL_DOC: 'proposal_doc',
    BINDER_DOC: 'binder_doc'
  },

  CARRIER_TASK: {
    COMMUNICATION_TYPE: {
      API: 'API',
      SQS: 'SQS'
    },
    REPONSE_TYPE: {
      SAMPLE: 'Sample',
      ORIGINAL: 'Original'
    },
    SYSTEM_TYPE: {
      WEB: 'Web',
      API: 'Api',
      INTERNAL: 'Internal'
    },
    JSON_TYPE: {
      FLAT: 'Flat',
      NESTED: 'Nested'
    },
    TASK_TYPE: {
      QOUTE: 'Quote'
    },
    QUOTE_STATUS: {
      RECEIVED_BINDABLE_QUOTE: 'received_bindable_quote',
      RECEIVED_INDICATION_QUOTE: 'received_indication_quote',
      RECEIVED_BINDABLE_QUOTE_APPLICATION: 'received_bindable_quote_application',
      RECEIVED_INDICATION_QOUTE_WITHOUT_APPLICATION: 'received_indication_quote_without_application',
      MANUAL_QUOTE: 'manual_quote',
      OTHER_QUOTE: 'other_quote'
    }
  },
  APPLICATION_APPROVAL_STATUS: {
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    PENDING: 'PENDING'
  },

  SIGNATURE_SERVICE_OPTIONS: {
    INTERNAL_SIGNATURE_SERVICE: 'INTERNAL_SIGNATURE_SERVICE',
    EXTERNAL_SIGNATURE_SERVICE: 'EXTERNAL_SIGNATURE_SERVICE'
  },

  DOCUMENT_UPLOAD_FEATURES: {
    ESIGN_VENDOR: 'ESIGN_VENDOR',
    DIRECT_UPLOAD: 'DIRECT_UPLOAD',
    CARRIER_E_SIGN: 'CARRIER_E_SIGN'
  },

  SIGN_PROPOSAL_SENT_STATUS: {
    PENDING: 'Pending',
    SENT_TO_CUSTOMER: 'Sent to customer',
    SIGNED_SUCCESFULLY: 'Signed successfully'
  },
  COMPANY_SEARCH_LIMIT: 10,
  VERSION_DIFF: 0.1,

  SET_ADMIN_ROLE: (businessType) => `${businessType}_ADMIN`,
  SET_SUB_ADMIN_ROLE: (businessType) => `${businessType}_SUB_ADMIN`,
  SET_EMPLOYEE_ROLE: (businessType) => `${businessType}_EMPLOYEE`,
  TEMP_PROPS: {
    ACTIVE_PRODUCT_ICON_URL:
      'https://square-risk-dev-us-east-files.s3.us-east-1.amazonaws.com/products/icons/product_liability_active.svg',
    IN_ACTIVE_PRODUCT_ICON_URL:
      'https://square-risk-dev-us-east-files.s3.us-east-1.amazonaws.com/products/icons/product_liability.svg'
  },
  SYSTEM_EMAIL: 'SYSTEM_EMAIL',
  TOKEN_TYPES: {
    SHARE_APPLICATION: 'SHARE_APPLICATION',
    APPLICATION: 'APPLICATION',
    FORGOT_PASSWORD: 'FORGOT_PASSWORD',
    CONSUMER_APPLICATION: 'CONSUMER_APPLICATION',
    CUSTOMER_PAYMENT: 'CUSTOMER_PAYMENT'
  },
  TEMPLATES_PATH: {
    PRE_REFER_TO_MGA: '../../templates/pre_refer_to_mga.txt'
  },
  APPLICATION_STATUS: {
    INITIATED: 'initiated',
    QUOTE_REQUESTED: 'quote_requested',
    QUOTE_PRE_BIND: 'quote_pre_bind',
    QUOTE_REVIEW: 'quote_review',
    BIND_QOUTE: 'bind_quote',
    QUOTE_SELECTED: 'quote_selected',
    PENDING_QUOTE_REFFERRAL_TO_MGA: 'pending_quote_referral_to_mga',
    QUOTE_SIGNED_BY_CUSTOMER: 'quote_signed_by_customer',
    PENDING_CUSTOMER_SIGNATURE: 'pending_customer_signature',
    PENDING_AGENT_SIGNATURE: 'pending_agent_signature',
    CUSTOMER_SIGNED: 'customer_signed',
    SIGNATURE_COMPLETED: 'signature_completed',
    SENT_TO_CUSTOMER_FOR_SIGNATURE: 'sent_to_customer_for_signature',
    PENDING_FOR_REFERENCE: 'pending_for_reference',
    REFERRED_TO_MGA: 'referred_to_mga',
    ACCEPTED_BY_MGA: 'accepted_by_mga',
    PENDING_REVIEW_BY_MGA: 'pending_review_by_mga',
    REJECTED_BY_MGA: 'rejected_by_mga',
    PAYMENT_COLLECTED: 'payment_collected',
    POLICY_RECEIVED: 'policy_received',
    PENDING_POLICY_REFERRAL_TO_MGA: 'pending_policy_referral_to_mga',
    MGA_POLICY_REQUESTED: 'mga_policy_requested',
    CLOSED: 'closed',
    PAYMENT_PENDING: 'payment_pending',
    PAYMENT_SUCCESS: 'payment_success',
    PAYMENT_OFFLINE: 'payment_offline'
  },
  QUOTE_STATUS: {
    RECEIVED_BINDABLE_QUOTE: 'received_bindable_quote',
    RECEIVED_INDICATION_QUOTE: 'received_indication_quote',
    RECEIVED_BINDABLE_QUOTE_APPLICATION: 'received_bindable_quote_application',
    MANUAL_QUOTE: 'manual_quote',
    OTHER_QUOTE: 'other_quote',
    RECEIVED_INDICATION_QOUTE_WITHOUT_APPLICATION:
      'received_indication_quote_without_application',
    NOT_ELIGIBLE: 'not_eligible',
    BIND: 'Bind',
    QUOTE: 'Quote',
    FAILED: 'Failed',
    DELETED: 'Deleted',
    PROCESSING: 'Processing',
    UNDER_REVIEW: 'Under_review'
  },
  QUOTE_TYPE: {
    MANUAL_QUOTE: 'MANUAL_QUOTE',
    AUTOMATIC_QUOTE: 'AUTOMATIC_QUOTE'
  },
  SCREEN_STATE: {
    SUCCESS: 'success',
    WAITING_ON_MGA: 'waiting_on_mga',
    SELECT_AGAIN: 'select_again',
    SEND_AGAIN: 'send_again',
    CLOSED: 'closed',
    SIGN: 'sign',
    PENDING_FOR_SEND_TO_CUSTOMER: 'pending_for_send_to_customer',
    CUSTOMER_SIGNED: 'customer_signed',
    APPROVED_BY_MGA: 'approved_by_mga',
    PAYMENT_PENDING: 'payment_pending',
    PAYMENT_SUCCESS: 'payment_success',
    WAITING_ON_MGA_POLICY: 'waiting_on_mga_policy',
    PENDING_FOR_AGENT_SIGN: 'pending_for_agent_sign'
  },

  POLICY_REQUEST_STATUS: {
    REQUEST_POLICY: 'Request Policy',
    POLICY_REQUESTED: 'Policy Requested',
    POLICY_RECIEVED: 'Policy Received',
    PENDING: 'Pending',
    UPLOADED: 'Uploaded Policy'

  },
  DISTRIBUTION_MODULE: 'distribution',
  CALLBACK_MODULE: {
    BASE_URL: '/callback',
    SIGN_HOOK: '/sign-docs-hook',
    SEND_CUSTOMER_HOOK: '/send-to-customer-hook',
    UPDATE_FLOOD_PROPOSAL: '/update-flood-proposal',
    BLITZ_CALLBACK: '/blitz-callback',
    WHITE_EAGLE_CALLBACK: '/white-eagle-callback',
    BLITZ_RPA_CALLBACK: '/blitz-rpa-callback',
    NEPTUNE_API_CALLBACK: '/neptune-api-callback',
    ATBAY_API_CALLBACK: '/atbay-api-callback',
    ATBAY_HANDLE_BIND_POLICY: '/atbay-bind-policy',
    ATBAY_UPDATE_QUOTE_STATUS: '/atbay-update-quote-status',
    COWBELL_API_CALLBACK: '/cowbell-api-callback',
    COWBELL_API_UPDATE_ACCOUNTID: '/cowbell-update-accountid',
    COWBELL_WEBHOOK_CALLBACK_PATH: '/cowbell-update-quotes-status',
    COWBELL_POLICY_ISSUE: '/handle-policy-issue-webhook',
    BLITZ_UPDATE_QUOTE_CALLBACK: '/blitz-update-quote-callback',
    NEPTUNE_UPDATE_QUOTE_CALLBACK: '/neptune-update-quote-callback',
    // ATBAY_UPDATE_QUOTE_CALLBACK: '/atbay-update-quote-callback',
    AMTRUST_API_CALLBACK: '/amtrust-api-callback',
    AMTRUST_SUBMIT_CARRIER_FORM_CALLBACK: '/amtrust-submit-carrier-form-callback',
    AMTRUST_BIND_MAKE_PAYMENT_CALLBACK: '/amtrust-bind-make-payment-callback',
    AMTRUST_BALANCE_SUMMARY_POLICY_CALLBACK: '/amtrust-balance-summary-policy-callback',
    COWBELL_CARRIER_FORM_CALLBACK: '/cowbell-carrier-form-callback',
    FLOOD_FLOW_SAVE_QUOTES: '/flood-flow-save-quotes',
    ATBAY_API_UPDATE_COMPANYID: '/atbay-update-companyid',
    FLOOD_FLOW_UPDATE_QUOTES: '/flood-flow-update-quotes',
    APPLICATION_PDF_HANDLER: '/application-pdf-handler',
    GBLI_API_CALLBACK: '/gbli-api-callback',
    GBLI_UPDATE_API_CALLBACK: '/gbli-update-api-callback',
    SES_CALLBACK: '/ses-callback'
  },
  REFER_TO_MGA_LINKS: {
    APPROVAL: '/mga-approve-app/',
    REJECTION: '/mga-reject-app/'

  },

  API_NAMES_TO_GET_STATUS: {
    CALLBACK: {
      ZOHO_CALLBACK: 'zoho-callback'
    },
    UPDATE_TO_PAYMENT_PENDING_SCREEN: 'update_to_payment_pending_screen',
    UPDATE_TO_POLICY_SCREEN: 'update_to_policy_screen',
    UPDATE_TO_POLICY_SCREEN_CARRIER_E_SIGN: 'update_to_policy_screen_carrier_e_sign',
    AGENT_SIGNED: 'agentSigned',
    NEW_PREPARE_APPLICATION: 'new-submit-final-application'
  },
  MGA_REJECTION_REASONS: {
    INSUFFICIENT_INFORMATION: Messages.INSUFFICIENT_INFORMATION,
    INDUSTRY_NOT_ELIGIBLE: Messages.INDUSTRY_NOT_ELIGIBLE,
    RISK_LEVEL_HIGH: Messages.RISK_LEVEL_HIGH,
    OTHERS: Messages.OTHERS
  },
  MGA_PACKAGES: {
    FLOODSOL: 'FLOODSOL.COM',
    BLITZ: 'BLITZ_PRODUCER_PORTAL',
    DUAL: 'DUAL.COM',
    WHITE_EAGLE: 'WHITEEAGLECATEST.COM',
    BLITZ_API_MGA: 'BLITZ_PRODUCER_PORTAL',
    DEFAULT_MGA: 'DEFAULTMGA.COM',
    OTHER_MGA: 'OTHERMGA.COM',
    NEPTUNE_MGA: 'NEPTUNE_MGA',
    COWBELL_MGA: 'COWBELL_MGA',
    HIGHVIEW_NATIONAL_MGA: 'HIGHVIEW_NATIONAL',
    HIGHVIEW_NATIONAL_INSURANCE_CARRIER: 'HIGHVIEW_NATIONAL_INSURANCE_CARRIER',
    AMTRUST_MGA: 'AMTRUST_MGA',
    POULTON_MGA: 'POULTON_MGA',
    AT_BAY_MGA: 'AT-BAY_MGA',
    EMPLOYERS_MGA: 'EMPLOYERS_MGA_MGA',
    EMPLOYERS_CARRIER: 'EMPLOYERS_CARRIER',
    AMTRUST_CARRIER: 'AMTRUST_CARRIER',
    COVERWHALE_MGA: 'COVERWHALE_MGA',
    COVERISK_MGA: 'COVERISK_MGA',
    COVERISK_CARRIER: 'COVERISK_CARRIER',
    FLOOD_FLOW_MGA: 'FLOODFLOW_MGA',
    HISCOX_MGA: 'HISCOX_MGA',
    GBLI_MGA: 'GBLI_MGA',
    MIDWESTERN_MGA: 'MIDWESTERN_MGA',
    CANNGEN_MGA: 'CANNGEN_MGA',
    SES_RISK_SOLUTIONS_MGA: 'SES_RISK_SOLUTIONS_MGA',
    AIU_MGA: 'AIU_MGA',
    KINSALE_MGA: 'KINSALE_MGA',
    ROCKALL_MGA: 'ROCKALL_MGA',
    CFC_MGA: 'CFC_MGA'
  },

  CARRIER_SLUGS: {
    EMPLOYERS_CARRIER: 'EMPLOYERS_CARRIER',
    AMTRUST: 'AMTRUST_CARRIER',
    COWBELL_P100: 'COWBELL_P100',
    COWBELL_P250: 'COWBELL_P250',
    BRIT_CARRIER: 'BRIT_CARRIER',
    VAVE_CARRIER: 'VAVE_CARRIER',
    HISCOX_CARRIER: 'HISCOX_CARRIER',
    CHUBB_CARRIER: 'CHUBB_CARRIER',
    CHAUCER_CARRIER: 'CHAUCER_CARRIER',
    ARGO_CARRIER: 'ARGO_CARRIER',
    BLITZ_CARRIER: 'BLITZ_CARRIER',
    DUAL_CARRIER: 'DUAL_NORTH_AMERICA_INC_CARRIER',
    MIDWESTERN_CARRIER: 'MIDWESTERN_CARRIER'
  },

  BINDINGS_TAB: {
    AUTHORIZE_BUTTON_TEXT: {
      AUTHORIZE_BIND: 'Authorize bind',
      APPROVED: 'Approved',
      REJECTED: 'Rejected',
      AUTHORIZE: 'Authorize'
    },
    REFER_BUTTON_TEXT: {
      REFERRED: 'Referred',
      REFER: 'Refer'
    }
  },
  COVERAGE_VALUES: {
    ONE_MILLION: 1000000,
    TWO_MILLION: 2000000
  },
  COVERAGE_VALUES_IDENTIFIER: {
    ONE_MILLION: '1million',
    TWO_MILLION: '2million'
  },
  PAYMENT_METHOD: {
    CREDIT_CARD: 'creditCard',
    ACH: 'ach',
    OFFLINE: 'offline'
  },
  SOCKET: {
    PATH: '/socket',
    COMMANDS: {
      QUOTE_PAGE_REFRESH: 'QUOTE_PAGE_REFRESH'
    },
    IDENTIFIERS: {
      SOCKET_TEST: 'SOCKET_TEST',
      MGA_APPROVAL: 'MGA_APPROVAL',
      QUOTE_REFRESH: (applicationId) => `QUOTE_REFRESH-APPLICAITON-${applicationId}`,
      SEND_TO_CUSTOMER: (applicationId) => `SEND_TO_CUSTOMER-${applicationId}`,
      SIGNED_BY_CUSTOMER: (submissionResponseId) => `SIGNED_BY_CUSTOMER-${submissionResponseId}`,
      SIGNED_BY_AGENT: (submissionResponseId) => `SIGNED_BY_AGENT-${submissionResponseId}`,
      POLICY_UPLOADED: (applicationId) => `POLICY_UPLOADED-${applicationId}`,
      PAYMENT_SUCCESS: (submissionResponseId) => `PAYMENT_SUCCESS-${submissionResponseId}`,
      MGA_DTO_ERROR: (applicationId) => `MGA_DTO-ERROR-${applicationId}`,
      FLOODSOL_QUOTE_ERROR: (applicationId) => `FLOODSOL_QUOTE-ERROR-${applicationId}`,
      BLITZ_QUOTE_ERROR: (applicationId) => `BLITZ_QUOTE-ERROR-${applicationId}`,
      FORM_FILLED_SUCCESSFULLY: (applicationId) => `FORM_FILLED_SUCCESSFULLY-${applicationId}`,
      FORM_CONTROL: (applicationId) => `FORM-CONTROL-${applicationId}`,
      PAYMENT_UPDATED: (applicationId) => `PAYMENT-UPDATED-${applicationId}`,
      PAYMENT_EXPIRED: (applicationId) => `PAYMENT-EXPIRED-${applicationId}`,
      PAYMENT_CANCELLED: (applicationId) => `PAYMENT-CANCELLED-${applicationId}`,
      QUOTE_APPLICATION_PDF_AVAILABLE: (submissionResponseId) => `QUOTE-APPLICATION-PDF-AVAILABLE-${submissionResponseId}`,
      SIGNATURE_PACKAGE_GENERATION_FAILED: (submissionResponseId) => `SIGNATURE-PACKAGE-GENERATION-FAILED-${submissionResponseId}`
    }
  },
  MGA_PACKAGES_UTILS: {
    DISCOUNTS: {
      sr_cyber_enhanced_data_control: 'ENHANCED_DATA_CONTROLS',
      sr_cyber_enhanced_security_control: 'SECURITY_TOOLS',
      sr_cyber_enhanced_vendor_oversight: 'THIRD_PARTY_MANAGEMENT',
      sr_cyber_risk_management: 'RISK_MANAGEMENT_PROCEDURES'
    },
    CREDITS: {
      sr_cyber_coverage_terrorism: 'REMOVAL_OF_CYBER_TERRORISM_COVERAGE',
      sr_cyber_coverage_extortion: 'REMOVAL_OF_NETWORK_COVERAGE',
      sr_cyber_coverage_biz_interruption: 'REMOVAL_OF_BUSINESS_INTERRUPTION_COVERAGE',
      sr_cyber_coverage_pci: 'REMOVAL_OF_PCI_COVERAGE',
      sr_cyber_advanced_security_tools: 'USE_OF_EDR_MDR_XDR_TOOL'
    },
    DESCISIONS: {
      YES: 'yes',
      NO: 'no'
    }
  },
  SIGNATURE_SERVICE_CALL: {
    INTERNAL_COVER_LETTER: 'INTERNAL_COVER_LETTER',
    INTERNAL_APPLICATION_PDF: 'INTERNAL_APPLICATION_PDF',
    DUAL: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER',
        STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2,
        STATE_TEMPLATE: 3
      }
    },
    ATBAY: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER',
        STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2,
        STATE_TEMPLATE: 3
      }
    },
    POULTON: {
      TEMPLATE_SLUG: {
        // COVER_LETTER: 'FLOODSOL_COVERLETTER',
        // STATE_TEMPLATE: 'FLOODSOL_FL_STATE'
      },
      ORDER: {
        // COVER_LETTER: 1,
        APPLICATION: 1
        // STATE_TEMPLATE: 3
      }
    },
    COVERISK: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER'
        // STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2
        // STATE_TEMPLATE: 3
      }

    },
    MIDWESTERN: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER'
        // STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2
        // STATE_TEMPLATE: 3
      }

    },
    CANNGEN: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER'
        // STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2
        // STATE_TEMPLATE: 3
      }

    },
    AIU: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER'
        // STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2
        // STATE_TEMPLATE: 3
      }

    },
    SES: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER'
        // STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2
        // STATE_TEMPLATE: 3
      }

    },
    KINSALE: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER'
        // STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2
        // STATE_TEMPLATE: 3
      }

    },
    ROCKALL: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER'
        // STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2
        // STATE_TEMPLATE: 3
      }

    },
    CFC: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER'
        // STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2
        // STATE_TEMPLATE: 3
      }

    },
    COWBELL: {
      TEMPLATE_SLUG: {
        COWBELL_AGENT_ATTESTATION: 'COWBELL_AGENT_ATTESTATION'
      },
      ORDER: {
        APPLICATION: 1,
        COWBELL_AGENT_ATTESTATION: 2,
        STATE_TEMPLATE: 3
      }
    },
    FLOODSOL: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'FLOODSOL_COVERLETTER',
        APP_TEMPLATE: 'FLOODSOL_APPLICATION_FORM',
        STATE_TEMPLATE: 'FLOODSOL_FL_STATE'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2,
        STATE_TEMPLATE: 3
      }
    },
    WHITE_EAGLE: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER',
        APP_TEMPLATE: 'WHITE_EAGLE_APPLICATION_TEMPLATE',
        STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2,
        STATE_TEMPLATE: 3
      }
    },
    BLITZ: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER',
        APP_TEMPLATE: 'BLITZ_APPLICATION_TEMP',
        STATE_TEMPLATE: 'FL'
      },
      ORDER: {
        // COVER_LETTER: 1,
        APPLICATION: 1,
        STATE_TEMPLATE: 3
      }
    },
    HIGHVIEW_NATIONAL_MGA: {
      TEMPLATE_SLUG: {
        COVER_LETTER: 'COVER_LETTER',
        HIGH_VIEW_STATE_GRID: 'HIGH_VIEW_STATE_GRID',
        HIGH_VIEW_THIRD_FOURTH_PAGE: 'HIGH_VIEW_THIRD_FOURTH_PAGE',
        STATE_TEMPLATE: 'HV'
      },
      ORDER: {
        COVER_LETTER: 1,
        APPLICATION: 2,
        HIGH_VIEW_STATE_GRID: 3,
        HIGH_VIEW_THIRD_FOURTH_PAGE: 4,
        STATE_TEMPLATE: 5
      }
    },
    MTRUST_MGA: {
      TEMPLATE_SLUG: {
        BIND_PDF: 'SR_bind'
      },
      ORDER: {
        BIND_PDF: 1
      }
    },
    PRIORITY: {
      AGENT: 2,
      CUSTOMER: 1
    },
    CUSTOMER_EXIST: 'CUSTOMER_EXIST',
    CUSTOMER_NOT_EXIST: 'CUSTOMER_NOT_EXIST',
    INITIATE_ZOHO_SERVICE: 'INITIATE_ZOHO_SERVICE',
    UPDATE_CUSTOMER_EMAIL_ON_ZOHO: 'UPDATE_CUSTOMER_EMAIL_ON_ZOHO',
    APPLICATION_PDF_EXIST: 'APPLICATION_PDF_EXIST',
    MERGE_PDF_WITHOUT_POPULATING: 'MERGE_PDF_WITHOUT_POPULATING',
    SIGNED: 'SIGNED',
    NOACTION: 'NOACTION',
    COMPLETED: 'completed'
  },
  ADMIN_NAME: 'UNDER PROCESS',
  MGA_FORM_FILES_PATH: 'form-files',
  SEND_INVITATION_EMAIL_SUBJECT: 'SquareRisk Invitation',
  SEND_EMAIL_ON_POLICY_UPLOAD_SUBJECT: 'Policy Uploaded – Available for Download',
  SEND_EMAIL_ON_MGA_APPROVAL_SUBJECT: 'Quote Referral Approved – Ready for Customer Signature',
  SEND_EMAIL_ON_MGA_REJECT_SUBJECT: 'Quote Referral Rejected – Review Needed',
  READY_FOR_AGENT_SIGNATURE: 'Ready for Agent Signature',
  SEND_EMAIL_FOR_NEW_USER_ACCOUNT_SETUP_SUBJECT: 'New User Requesting SquareRisk Account Setup',
  SEND_EMAIL_FOR_SHARE_APPLICATION_FORM_SUBJECT: 'Request for Completion of Insurance Application Form',
  SEND_EMAIL_TO_SR_ADMIN_APPROVAL_SUBJECT: 'Non-Bindable Quote Ready for Approval',
  NEW_MANUAL_QUOTE_REQUEST: 'New Manual Quote Request',
  SEND_EMAIL_ON_QUOTE_INDICATION_UPDATE_SUBJECT: 'Quote-Indication updated',
  SEND_EMAIL_ON_DOCUMENT_UPLOAD_SUBJECT: 'New User Document Uploaded - Review Required',
  SEND_EMAIL_CUSTOMER_NEW_QUOTES: 'Quotes Generated successfully!',
  SEND_EMAIL_ON_FORGOT_PASSWORD_SUBJECT: 'Reset Password Request',
  SEND_EMAIL_ON_ACCOUNT_SETUP: 'SquareRisk Account Setup',
  SEND_EMAIL_ON_AGENCY_SIGNUP: 'Welcome to SquareRisk!',
  SEND_EMAIL_ON_DISTRIBUTION_UPDATES: 'Your Quote Has Been Updated!',
  SEND_EMAIL_ON_NEW_AGENT_REGISTER_SUBJECT: 'Welcome to SquareRisk! Your Registration is Complete.',
  FINANCE_REVIEW_FOR_NEW_PAYMENT_TRANSACTION: 'Finance Review Notification',
  PAYMENT_FAILURE: (applicationId) => `Payment Failure #${applicationId}`,

  MGA_ERROR_CODES: {
    P100: {
      message: 'SOMETHING_WENT_WRONG',
      code: 'P100'
    },
    P101: {
      message: 'STATE_NOT_FOUND',
      code: 'P101'
    },
    P102: {
      message: 'REVENUE_NOT_DEFINED',
      code: 'P102'
    },
    P103: {
      message: 'COVERAGE_LIMIT_NOT_DEFINED',
      code: 'P103'
    },
    P104: {
      message: 'INDUSTRY_CODE_NOT_DEFINED',
      code: 'P103'
    },
    P105: {
      message: 'FLOODSOL_QUOTE_FAILED',
      code: 'P105'
    },
    P106: {
      message: 'BLITZ_QUOTE_FAILED',
      code: 'P106'
    },
    P107: {
      message: 'HIGHVIEW_QUOTE_FAILED_CLASS_CODE_NOT_DEFINED',
      code: 'P107'
    },
    P108: {
      message: 'HIGHVIEW_QUOTE_FAILED_PAYROLL_AMOUNT_NOT_DEFINED',
      code: 'P108'
    },
    P109: {
      message: 'NAICS_CODE_NOT_DEFINED',
      code: 'P109'
    },
    P110: {
      message: 'ADDRESS_NOT_FOUND',
      code: 'P110'
    },
    P111: {
      message: 'FEIN INVALID',
      code: 'P111'
    },
    P112: {
      message: 'ZIP_CODE_NOT_FOUND',
      code: 'P112'
    },
    P113: {
      message: 'STATE_NOT_FOUND',
      code: 'P113'
    },
    P114: {
      message: 'CITY_NOT_FOUND',
      code: 'P114'
    },
    P115: {
      message: 'INSURED_FEIN_NOT_FOUND',
      code: 'P115'
    },
    P116: {
      message: 'AGENCY_EMAIL_NOT_FOUND',
      code: 'P116'
    },
    P117: {
      message: 'BUILDING_COST_NOT_FOUND',
      code: 'P117'
    },
    P118: {
      message: 'ATLEAST_ONE_LEIN_HOLDER_SHOULD_BE_PRESENT',
      code: 'P118'
    }
  },
  COMPANY_DOCUMENT_TYPES: {
    TAX_FORM: 'TAX_FORM',
    AGREEMENT: 'AGREEMENT',
    COI: 'COI',
    W9: 'W9',
    EO_INSURANCE_CERTIFICATE: 'E&O_INSURANCE_CERTIFICATE',
    STATE_LICENSE: 'STATE_LICENSE',
    CARRIER_PRODUCT_DOCUMENT: 'CARRIER_PRODUCT_DOCUMENT'
  },

  TAX_PAYER_OPTIONS: {
    MGA: 'MGA',
    PORTAL: 'PORTAL'
  },
  DEFAULT_CUSTOMER_COMPANY: {
    DEFAULT_CUSTOMER_COMPANY_SLUG: 'DEFAULT_CUSTOMER_COMPANY',
    DEFAULT_CUSTOMER_COMPANY_DOMAIN: 'SR_DEFAULT_CUSTOMER_COMPANY.COM',
    DEFAULT_CUSTOMER_COMPANY_NAME: 'DEFAULT_CUSTOMER_COMPANY_NAME'
  },

  DEFAULT_CONSUMER_AGENCY: {
    DEFAULT_CONSUMER_AGENCY_SLUG: 'DEFAULT_CONSUMER_AGENCY',
    DEFAULT_CONSUMER_AGENCY_DOMAIN: 'DEFAULT_CONSUMER_AGENCY.COM',
    DEFAULT_CONSUMER_AGENCY_NAME: 'DEFAULT_CONSUMER_AGENCY'
  },

  PRODUCT_SLUG: {
    CANNABIS_D_O: 'CANNABIS:_D&O',
    CANNABIS_EPLI: 'CANNABIS:_EPLI',
    CANNABIS_WORKERS_COMPENSATION: 'CANNABIS_WORKERS_COMPENSATION',
    CYBER_INSURANCE: 'CYBER_INSURANCE',
    RESIDENTIAL_FLOOD_INSUARANCE: 'RESIDENTIAL_FLOOD_INSURANCE',
    COMMERCIAL_FLOOD_INSURANCE: 'COMMERCIAL_FLOOD_INSURANCE',
    CANNABIS_PROPERTY_LIABILITY: 'CANNABIS_GENERAL_LIABILITY_+_PROPERTY_LIABILITY',
    GENERAL_LIABILITY: 'GENERAL_LIABILITY',
    WORKERS_COMPENSATION: 'WORKERS_COMPENSATION',
    CANNABIS_PRODUCT_LIABILITY: 'CANNABIS_PRODUCT_LIABILITY',
    CANNABIS_GENERAL_LIABILITY: 'CANNABIS_GENERAL_LIABILITY',
    AUTOMOBILE_PHYSICAL_DAMAGE: 'AUTOMOBILE_PHYSICAL_DAMAGE',
    TRUCKERS_GENERAL_LIABILITY: 'TRUCKERS_GENERAL_LIABILITY',
    NON_TRUCKING_LIABILITY: 'NON-TRUCKING_LIABILITY',
    MOTOR_TRUCK_CARGO: 'MOTOR_TRUCK_CARGO',
    AUTOMOBILE_LIABILITY: 'AUTOMOBILE_LIABILITY',
    BUILDERS_RISK: 'BUILDERS_RISK',
    BUILDERS_RISK_RESIDENTIAL: 'BUILDERS_RISK_RESIDENTIAL',
    CANNABIS_AUTO_LIABILITY: 'CANNABIS:_AUTO_LIABILITY',
    HEALTHCARE_PROPERTY: 'HEALTHCARE_PROPERTY',
    HOTEL_MOTEL_PROPERTY: 'HOTEL_MOTEL_PROPERTY',
    LANDLORD_INSURANCE_MULTI_FAMILY: 'LANDLORD_INSURANCE:_MULTI_FAMILY',
    BOP: 'BOP',
    CANNABIS_EXCESS_LIABILITY: 'CANNABIS:_EXCESS_LIABILITY',
    TRUCKING_EXCESS_LIABILITY: 'TRUCKING:_EXCESS_LIABILITY',
    TECH_E_O: 'TECH_E&O',
    LIQUOR_LIABILITY: 'LIQUOR_LIABILITY',
    RESTAURENT_GENERAL_LIABILITY: 'GC-_RESTAURANT_BAR_OR_TAVERN'
  },
  TAXPAYER_TYPES: {
    MGA: 'MGA',
    PORTAL: 'PORTAL'
  },

  DISTRIBUTION_SEARCH: {
    AGENCY: 'AGENCY',
    PRODUCT: 'PRODUCT'
  },
  BIND_TYPE: {
    INTERNAL: 'INTERNAL',
    EXTERNAL_API: 'EXTERNAL_API',
    EXTERNAL_NAVIGATION: 'EXTERNAL_NAVIGATION',
    EXTERNAL_CARRIER_E_SIGN: 'EXTERNAL_CARRIER_E_SIGN',
    EXTERNAL_BINDING: 'EXTERNAL_BINDING',
    AFTER_PAYMENT: 'AFTER_PAYMENT'
  },
  REDIS_EXPIRY_SECONDS: 86400,
  CONSUMER_PROPERTIES: {
    DEFAULT_WAIT_TIME: 8000 // in milliseconds
  },

  IS_ADMITTED: {
    ADMITTED: 'ADMITTED',
    NON_ADMITTED: 'NON_ADMITTED'
  },
  MGA_PACKAGES_ACTION: {
    CREATE: 'create',
    UPDATE: 'update'
  },
  EVENTS: {
    AGENT_LOGIN: 'AGENT_LOGGED_IN',
    NEW_APPLICATION_CREATED: 'NEW_APPLICATION_CREATED',
    APPLICATION_BIND: 'APPLICATION_BOUND',
    APPLICATION_RESPONSE_FROM_MGA: 'APPLICATION_RESPONSE_FROM_MGA'
  },
  DOCUMENT_PROCESS: {
    PROCESSING: 'PROCESSING',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED',
    FAILED: 'FAILED'
  },
  METHOD_NAMES: {
    BIND_APPLICATION: 'bindApplication'
  },
  QUOTES_PAGE_LABEL: {
    VIEW_INVOICE: 'View Invoice',
    VIEW_PROPOSAL: 'View Proposal',
    VIEW_QUOTE: 'View Quote Document',
    VIEW_SECURITY_REPORT: 'View Security Report'
  },
  QUOTE_RETRIGGER_ACTIONS: {
    REFRESH_QUOTE: 'REFRESH_QUOTE'
  },
  PRODUCT_APPLICATIONS: 'PRODUCT_APPLICATIONS',
  CARRIER_APPLICATIONS: 'CARRIER_APPLICATIONS',

  HIGHVIEW: {
    LCM: 1.22,
    pennsylvaniaLCM: 1.35,
    newJerseyLCM: 1,
    LCM_STATES: {
      NEW_JERSEY: 'New Jersey',
      PENNSYLVANIA: 'Pennsylvania'
    },
    CLASS_CODES_DATA: [{
      CODE: '0005',
      DESC: 'Nurserymen, Drivers, Incidental Landscaping (Cannabis)',
      AMOUNT: '1.79'
    }, {
      CODE: '0006',
      DESC: 'Farms & Drivers (Cannabis)',
      AMOUNT: '2.39'
    }, {
      CODE: '0035',
      DESC: 'Florists: Cultivating or Gardening (Cannabis)',
      AMOUNT: '2.51'
    }, {
      CODE: '4611',
      DESC: 'Medicine or Pharmaceutical Preparation (Cannabis)',
      AMOUNT: '2.24'
    }, {
      CODE: '2172',
      DESC: 'Cannabis Products Manufacturing',
      AMOUNT: '4.65'
    }, {
      CODE: '8017',
      DESC: 'Retail stores (Cannabis Dispensaries)',
      AMOUNT: '1.39'
    }, {
      CODE: '8018',
      DESC: 'Wholesale stores (Cannabis wholesale)',
      AMOUNT: '3.98'
    }]
  },
  COVERISK: {
    RATE_DEVIATION: 10,
    NUMBER_OF_DAYS: 365,
    ALLOWED_STATE: 'MA',
    LIMITS_DATA: [{
      LIMIT: 'standardLimits',
      FACTOR: 1,
      SURCHARGE: 0
    },
    {
      LIMIT: '100/100/1000',
      FACTOR: 0.5,
      SURCHARGE: 75
    },
    {
      LIMIT: '100/100/2500',
      FACTOR: 0.75,
      SURCHARGE: 100
    },
    {
      LIMIT: '100/100/5000',
      FACTOR: 1,
      SURCHARGE: 125
    },
    {
      LIMIT: '100/100/10000',
      FACTOR: 1.25,
      SURCHARGE: 150
    },
    {
      LIMIT: '500/500/500',
      FACTOR: 1,
      SURCHARGE: 50
    },
    {
      LIMIT: '500/500/1000',
      FACTOR: 1.25,
      SURCHARGE: 75
    },
    {
      LIMIT: '500/500/2500',
      FACTOR: 1.5,
      SURCHARGE: 100
    },
    {
      LIMIT: '500/500/5000',
      FACTOR: 1.75,
      SURCHARGE: 125
    },
    {
      LIMIT: '500/500/10000',
      FACTOR: 2,
      SURCHARGE: 150
    },
    {
      LIMIT: '1000/1000/1000',
      FACTOR: 2,
      SURCHARGE: 75
    },
    {
      LIMIT: '1000/1000/2500',
      FACTOR: 2.25,
      SURCHARGE: 100
    },
    {
      LIMIT: '1000/1000/5000',
      FACTOR: 2.5,
      SURCHARGE: 125
    },
    {
      LIMIT: '1000/1000/10000',
      FACTOR: 2.75,
      SURCHARGE: 150
    }
    ]
  },

  AGENCY_BUSINESS_TYPES: {
    REFERRAL: 'REFERRAL',
    AGENCY: 'AGENCY'
  },

  API_REQUEST_FROM: {
    SQUARE_RISK: 'SQUARE_RISK',
    CONSUMER: 'CONSUMER'
  },

  INDUSTRY_TYPE: {
    ALL: 'ALL',
    STANDARD: 'STANDARD',
    GENERAL: 'GENERAL'
  },

  PAYMENT_METHODS_OPTIONS: {
    CREDIT_CARD: 'CREDIT_CARD',
    PAY_LATER: 'PAY_LATER',
    ACH: 'ACH',
    SELECT_PAYMENT_PLAN: 'SELECT_PAYMENT_PLAN'
  },

  PAYMENT_RECEIVER_OPTIONS: {
    SR: 'SR',
    CARRIER: 'CARRIER'

  },

  // error type defined for sending error for globlal lever for UI or for component level
  ERROR_TYPES: {
    COMPONENT_ERROR: 'COMPONENT_ERROR',
    GLOBAL_ERROR: 'GLOBAL_ERROR'
  },
  APPLICATION_TYPE: {
    AGENCY_APPLICATION: 'AGENCY_APPLICATION',
    CONSUMER_APPLICATION: 'CONSUMER_APPLICATION'
  },

  POULTON_MGA_HELPER_CONSTANTS: {
    MORTGAGE_KEY: 'sr_ip_mortgage_closing',
    MORTGAGE_PAGE_TITLE: 'Mortgagee Details'
  },

  POULTON: {
    VERSION: 5,
    APP_STATUS: {
      SUBMITTED: 'Submitted'
    },
    ELIGIBLITY: {
      PASS: 'Pass',
      APPROVED: 'Approved',
      FAIL: 'Fail'
    }
  },

  SUBMISSION_RESPONSE_META_KEYS: {
    EXTERNAL_DATA: 'EXTERNAL_DATA',
    ACKNOWLEDGE_IDS: 'ACKNOWLEDGE_IDS',
    MORTGAGEE_GUID: 'MORTGAGEE_GUID',
    RISK_GUID: 'RISK_GUID',
    POULTON_TERM_YEAR: 'POULTON_TERM_YEAR',
    CONTINGENCY: 'CONTINGENCY',
    ATBAY_COMPANY_ID: 'ATBAY_COMPANY_ID',
    COWBELL_ACCOUNT_ID: 'COWBELL_ACCOUNT_ID',
    ATBAY_BINDER_PDF: 'ATBAY_BINDER_PDF',
    HISCOX_PAYMENT_META: 'HISCOX_PAYMENT_META',
    PAYER: 'PAYER'
  },
  APPLICATION_META: {
    CURRENT_CARRIER_FORM_PAGE: 'CURRENT_CARRIER_FORM_PAGE',
    EPLOYERS_FORM_REGERATE_PAGE: 'EPLOYERS_FORM_REGERATE_PAGE',
    APPLICATION_PDF_URL: 'APPLICATION_PDF_URL'
  },

  CRON: {
    DELETED_SUBMISSION_RES_PERIOD_IN: 'minute',
    DELETED_SUBMISSION_RES_PERIOD: 1,
    ACKNOWLEDGE_IDS: 'ACKNOWLEDGE_IDS'
  },

  QUOTE_CRON_SCHEDULAR_TYPES: {
    POULTON_QUOTE: 'POULTON_QUOTE',
    GET_QUOTE_STATUS_ATBAY: 'GET_QUOTE_STATUS_ATBAY',
    FINISHED_ATBAY: 'FINISHED_ATBAY',
    GET_QUOTE_STATUS: 'GET_QUOTE_STATUS',
    QUTOE_BOUND_GET_BALANCE_SUMMARY: 'QUTOE_BOUND_GET_BALANCE_SUMMARY',
    FINISHED: 'FINISHED'
  },

  QUOTE_BUILD_TIME_OPTIONS: {
    FEW_HOURS: 'Few hours',
    MANUAL_REVIEW: 'Manual Review',
    FEW_SECONDS: 'Few seconds'
  },

  DOCUMENT_TEMPLATE_TYPES: {
    APPLICATION_FORM: 'Application Form',
    STATE_SURPLUS_FORM: 'State Surplus Form',
    PROPOSAL_FORM: 'Proposal Form'
  },
  API_RATE_LIMIT: {
    DURATION: 5, // minutes
    MAX_CALLS: 300 // minutes
  },

  APPLICATION_PROPOSAL: {
    QUOTE_TYPE: {
      AGENT_GENERATED: 'AGENT_GENERATED',
      SYSTEM_GENERATED: 'SYSTEM_GENERATED'
    }
  },
  PREMIUM_EXCLUSION_KEYS: [{
    key: 'totaltaxes'
  },
  {
    key: 'basepremium'
  },
  {
    key: 'grandtotal'
  }],
  DISTRIBUTION_UPDATE_INDICATION_KEYS: {
    Limit: 'limit',
    Deductible: 'deductible'
  },

  TEMPLATE_TYPES: {
    OLD_FORM: 'OLD-FORM',
    INDICATION_COMMON_FORM: 'INDICATION-COMMON-FORM',
    INDICATION_CARRIER_FORM: 'INDICATION-CARRIER-FORM',
    QUOTE_COMMON_FORM: 'QUOTE-COMMON-FORM',
    QUOTE_CARRIER_FORM: 'QUOTE-CARRIER-FORM',
    PRODUCT_APPLICATIONS: 'PRODUCT-APPLICATIONS',
    CARRIER_APPLICATIONS: 'CARRIER-APPLICATIONS'
  },
  FORM_TYPES: {
    INDICATION_COMMON_FORM: 'INDICATION-COMMON-FORM',
    INDICATION_CARRIER_FORM: 'INDICATION-CARRIER-FORM',
    QUOTE_COMMON_FORM: 'QUOTE-COMMON-FORM',
    QUOTE_CARRIER_FORM: 'QUOTE-CARRIER-FORM'
  },
  LIMITS_DEDUCTIBLE_TYPE: {
    PRE_DEFINED_VALUES: 'PRE_DEFINED_VALUES',
    USER_DEFINED_VALUES: 'USER_DEFINED_VALUES',
    API_DEFINED_VALUES: 'API_DEFINED_VALUES'
  },
  TEMPLATE_TABS: {
    INDICATION_APPLICATION: 'INDICATION-APPLICATION',
    QUOTE_APPLICATION: 'QUOTE-APPLICATION'
    // PRODUCT_APPLICATIONS: 'PRODUCT-APPLICATIONS',
    // CARRIER_APPLICATIONS: 'CARRIER-APPLICATIONS'
  },
  DISTRIBUTION_OPERATIONS_TABS: {
    DATA_COLLECTION: 'DATA-COLLECTION',
    INDICATION_REQUESTS: 'INDICATION-REQUESTS',
    INDICATIONS: 'INDICATIONS',
    QUOTE_REQUESTS: 'QUOTE-REQUESTS',
    REVIEW_QUOTES: 'REVIEW-QUOTES'
  },
  INITIATE_CRON: 'INITIATE_CRON',
  GENERIC_MESSAGE: 'GENERIC_MESSAGE',
  UNLISTED_COVERAGE: 'Unlisted Coverage',
  EXCLUSION_KEYS: ['hidden', 'dontSeeYourAddress'],
  APPLICATION_PDF_KEYS_TYPE: {
    EXCLUDE: 'exclude',
    INCLUDE: 'include'
  },

  DISTRIBUTION_INDICATION_FILE_UPLOAD_TYPES: [{
    label: 'Application',
    value: 'appDocUrl'
  },
  {
    label: 'Invoice',
    value: 'invoiceUrl'
  }
  ],
  PORTAL_MENU_OPTIONS: {
    DISTRIBUTION: 'Distribution',
    PRODUCTS: 'Products',
    AGENCIES: 'Agencies',
    MGAS: 'Mgas',
    USERS: 'Users',
    DOCUMENT_TEMPLATE: 'Document Template',
    CONFIGURATION: 'Configuration',
    QUOTE_REQUEST: 'Quote Request'
  },
  ACCESS_TYPES: {
    READABLE: 'Readable',
    WRITEABLE: 'Writeable'
  },
  PAYER: {
    CUSTOMER: 'CUSTOMER',
    AGENT: 'AGENT'
  },
  DEFAULT_INSURED: {
    FIRST_NAME: 'Monesh',
    LAST_NAME: 'Jain',
    EMAIL: 'mjain@squarerisk.com'
  },
  PAYMENT_LINK_EXPIRE_TIME: 30,
  FORM_IO_ASSOCIATED_PRODUCTS_KEY: 'associatedProducts',

  PAYMENT_MODE_CHARGES: {
    CREDIT_CARD: 2,
    ACH: 1
  },
  TRANSACTION_TYPES: {
    COMMISSION: 'Commission',
    TAXES: 'Taxes',
    ACH_FEES: 'ach-fees',
    CREDIT_CARD: 'credit-card-fees',
    POLICY_FEE: 'policy-Fee',
    PLACEMENT_FEE: 'placement-Fee',
    PREMIUM: 'Premium',
    DOWN_PAYMENT: 'DownPayment',
    INSTALLMENT: 'Installment'
  },
  TAX_DEPARTMENT_PORTAL: 'TAX_DEPARTMENT_PORTAL',
  BACK_OFFICE_STATUSES: {
    INITIATED: 'Initiated',
    ASSIGN_CARRIERS: 'Assign Carriers',
    PREPARE_APPLICATION_SR: 'Prepare Application - SR',
    PREPARE_APPLICATION_AGENT: 'Prepare Application - Agent',
    PENDING_QUOTE_CARRIER: 'Pending Quote - Carrier',
    PENDING_QUOTE_SR: 'Pending Quote - SR',
    PENDING_BIND_ORDER: 'Pending Bind Order',
    PAYMENT: 'Payment',
    ON_HOLD: 'On Hold',
    CLOSED_BOUND: 'Closed - Bound',
    CLOSED_LOST: 'Closed - Lost',
    CLOSED_TEST_SUBMISSION: 'Closed - Test Submission'
  },
  APPLICATION_SUMMARY_KEYS: {
    OWNERS: 'owners',
    NEED_BY_DATE: 'needByDate',
    LOSS_REASON: 'lossReason',
    STATUS: 'status',
    TARGET_PREMIUM: 'targetPremium',
    LOSS_REASONS: {
      NO_MARKET: 'No Market',
      QUOTE_NOT_COMPETITIVE: 'Quote Not Competitive',
      SLOW_UNDERWRITNG: 'Slow Underwriting'
    },
    SUMMARY_NOTES: 'SUMMARY_NOTES'
  },
  SERVICE_REQUEST: {
    REQUEST_TYPE: {
      NAME_INSURED: {
        label: 'Name Insured',
        value: 'NAME_INSURED'
      },
      BOR_TO_SQUARE_RISK: {
        label: 'BOR to SquareRisk',
        value: 'BOR_TO_SQUARE_RISK'
      },
      // BILLING_ISSUE: {
      //   label: 'Billing Issue',
      //   value: 'BILLING_ISSUE'
      // },
      COI: {
        label: 'COI Request',
        value: 'COI'
      },
      OTHER: {
        label: 'Other',
        value: 'OTHER'
      }
    },
    REQUEST_STATUS: {
      INITIATED: {
        label: 'Initiated',
        value: 'INITIATED'
      },
      ASSIGNED: {
        label: 'Assigned',
        value: 'ASSIGNED'
      },
      IN_PROGRESS: {
        label: 'In-progress',
        value: 'IN_PROGRESS'
      },
      PENDING_ON_AGENT: {
        label: 'Pending on Agent',
        value: 'PENDING_ON_AGENT'
      },
      CLOSED: {
        label: 'Closed',
        value: 'CLOSED'
      }
    }
  },
  SERVICE_REQUEST_API_CALLS: {
    GET_AGENCY_CARRIERS: {
      BASE_URL: '/company-relationship',
      URL: '/get-agency-carriers',
      method: 'get',
      requiredParams: ['agencyId']
    },
    GET_AGENCY_PRODUCTS: {
      BASE_URL: '/company-product',
      URL: '/get-agency-products',
      method: 'get',
      requiredParams: ['agencyId']
    },
    GET_OWNER_LIST: {
      BASE_URL: '/user',
      URL: '/get-owners-list',
      method: 'get',
      requiredParams: ['search']
    },
    SEARCH_POLICY: {
      BASE_URL: '/policy',
      URL: '/search-policy-by-number',
      method: 'get',
      requiredParams: ['searchBy']
    }
  },
  MODULE_SUFFIXES: {
    RI: 'RI',
    RI_KEY_LENGTH: 8,
    PI: 'PI',
    PI_KEY_LENGTH: 8,
    AID: 'AID',
    AID_KEY_LENGTH: 8
  },
  POLICY_MODULE_STATUS: {
    UNDER_PROCESSING: 'UNDER_PROCESSING',
    ISSUED: 'ISSUED',
    CANCELLED: 'CANCELLED'
  },
  POLICY_MODULE_BILLING_TYPE: {
    AGENCY_BILL: 'AGENCY_BILL',
    DIRECT_BILL: 'DIRECT_BILL',
    SR_BILL_AGENCY: 'SR_BILL_AGENCY',
    SR_BILL_CUSTOMER: 'SR_BILL_CUSTOMER'
  },
  FEATURED_LABELS: {
    AUTO_BODY_REPAIR: 'Auto Body Repair',
    BARS_AND_TAVERNS: 'Bars & Taverns',
    BUILDERS: 'Builders',
    CANNABIS_DISPENSARIES: 'Cannabis Dispensaries',
    CANNABIS_MANUFACTURING: 'Cannabis Manufacturing',
    CANNABIS_CULTIVATION: 'Cannabis Cultivation',
    CAR_DEALERSHIPS: 'Car Dealerships',
    CONSTRUCTION_CONTRACTORS: 'Construction Contractors',
    FUEL_OIL_DEALERS: 'Fuel Oil Dealers',
    PROPERTY_DEALERS: 'Property Lessors',
    RESTAURANTS: 'Restaurants',
    TRUCKING: 'Trucking'
  },
  MANUAL_QUOTE_BUILD_DEFAULT_TIME: '2 Business Days',
  CATALOG_QUESTION_TYPE: {
    TEXT: 'TEXT',
    NUMBER: 'NUMBER',
    CHECKBOX: 'CHECKBOX',
    DATETIME: 'DATETIME',
    RADIO: 'RADIO',
    SELECT: 'SELECT'
  },
  NEW_QUOTE_STEPPER: {
    UNDERWRITING: 'Underwriting',
    SIGNATURE: 'Signature',
    PAYMENT: 'Payment',
    GET_POLICY: 'Get Policy'
  },
  RISK_TYPE_QUESTION_ID: 'RISK_TYPE',
  RULES: {
    COMPARISON_OPERATORS: {
      equal: {
        label: 'equal(==)',
        value: '=='
      },
      greaterThan: {
        label: 'greated than(>)',
        value: '>'
      },
      greaterThanOrEqual: {
        label: 'greated than or equal(>=)',
        value: '>='
      },
      lessThan: {
        label: 'less than(<)',
        value: '<'
      },
      lessThanOrEqual: {
        label: 'less than or equal(<=)',
        value: '<='
      },
      in: {
        label: 'in',
        value: 'in'
      },
      notIn: {
        label: 'not in',
        value: 'notIn'
      }
    }
  },
  DISTRIBUTION_LIST_FILTERS: {
    ARCHIVED: 'ARCHIVED',
    ACTIVE: 'ACTIVE'
  },
  OPEN_AI: {
    TEMPERATURE: 0.7,
    TOP_P: 0.95,
    MAX_TOKENS: 800
  },
  TRANSACTION_MODES: [
    { status: 'SENT', label: 'Send Money' },
    { status: 'RECEIVED', label: 'Receive Money' },
    { status: 'NONE', label: 'Other' }]

};
Constants.DISCLAMER_TEMPLATES = { [Constants.MGA_PACKAGES.AT_BAY_MGA]: '/server/sr-v2/templates/at_bay_disclaimer.html' };
Constants.COMPANY_BIND_DOCUMENT_TYPES = [Constants.COMPANY_DOCUMENT_TYPES.W9, Constants.COMPANY_DOCUMENT_TYPES.EO_INSURANCE_CERTIFICATE, Constants.COMPANY_DOCUMENT_TYPES.STATE_LICENSE];
Constants.TAXPAYER_TYPES_OPTIONS = [Constants.TAXPAYER_TYPES.MGA, Constants.TAXPAYER_TYPES.PORTAL];
Constants.BIND_TYPE_OPTIONS = [Constants.BIND_TYPE.EXTERNAL_API, Constants.BIND_TYPE.EXTERNAL_NAVIGATION, Constants.BIND_TYPE.EXTERNAL_CARRIER_E_SIGN, Constants.BIND_TYPE.INTERNAL, Constants.BIND_TYPE.EXTERNAL_BINDING, Constants.BIND_TYPE.AFTER_PAYMENT];
Constants.IS_ADMITTED_OPTIONS = [Constants.IS_ADMITTED.NON_ADMITTED, Constants.IS_ADMITTED.ADMITTED];
Constants.DOCUMENT_UPLOAD_FEATURES_OPTIONS = [Constants.DOCUMENT_UPLOAD_FEATURES.ESIGN_VENDOR, Constants.DOCUMENT_UPLOAD_FEATURES.DIRECT_UPLOAD];

Constants.CONSUMER_PRODUCTS = {
  COMMERCIAL_FLOOD: {
    CONSUMER_SLUG: 'COMMERCIAL_FLOOD',
    CARRIER_SLUG: Constants.PRODUCT_SLUG.COMMERCIAL_FLOOD_INSURANCE
  },
  BUILDERS_RISK: {
    CONSUMER_SLUG: 'BUILDERS_RISK',
    CARRIER_SLUG: Constants.PRODUCT_SLUG.BUILDERS_RISK_RESIDENTIAL
  }
  // RESIDENTIAL_FLOOD: {
  //   CONSUMER_SLUG: 'RESIDENTIAL_FLOOD',
  //   CARRIER_SLUG: Constants.PRODUCT_SLUG.RESIDENTIAL_FLOOD_INSUARANCE
  // }
};

Constants.DISTRIBUTION_INDICATION_QUOTE_STATUS = [{
  label: 'Under Review',
  value: Constants.QUOTE_STATUS.UNDER_REVIEW
},
{
  label: 'Decline',
  value: Constants.QUOTE_STATUS.FAILED
},
{
  label: 'Quote',
  value: Constants.QUOTE_STATUS.QUOTE
}];

Constants.PAYMENT_COMPANY_TYPES = {
  MGA: Constants.BUSINESS_TYPES.MGA,
  AGENCY: Constants.BUSINESS_TYPES.AGENCY,
  PORTAL: Constants.BUSINESS_TYPES.PORTAL,
  CUSTOMER: Constants.USER_TYPES.CUSTOMER,
  TAX_DEPARTMENT_PORTAL: Constants.TAX_DEPARTMENT_PORTAL
};


export default Constants;
