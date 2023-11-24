export const UI_CONTENT = {
  GLOBAL: {
    HEADER_LABEL_NAME: 'Name',
    HEADER_LABEL_TYPE: 'Type',
    HEADER_LABEL_ENABLED: 'Enabled',
    HEADER_TITLE: 'New Relic Reports Builder',
    ACTION_LABEL_CANCEL: 'Cancel',
    ACTION_LABEL_DELETE: 'Delete',
    ACTION_LABEL_EDIT: 'Edit',
    ACTION_LABEL_OK: 'OK',
    ACTION_LABEL_REMOVE: 'Remove',
    ACTION_LABEL_SAVE: 'Save',
    ACTION_LABEL_SAVE_AND_CLOSE: 'Save & Close',
    ACTION_LABEL_CLOSE: 'Close',
    ACTION_LABEL_RETRY: 'Retry',
    BUTTON_LABEL_DELETE_REPORT: 'Delete report',
    BUSY: {
      HEADING: 'Working on it, hang tight!',
      DESCRIPTION: 'Be right back.',
    },
    EMPTY_STATE: {
      HEADING: 'No reports found.',
      DESCRIPTION: 'Create a new report',
    },
    NO_REPORT_SELECTED: {
      HEADING: 'No report selected.',
      DESCRIPTION: 'Please select a report.',
    },
    STATUS_LABEL_ENABLED: 'Enabled',
    STATUS_LABEL_DISABLED: 'Disabled',
  },

  ERRORS: {
    READ_FAILED: {
      HEADING: 'Uh-oh! Something is not right.',
      DESCRIPTION: 'I couldn\'t read the application data.',
    },
    UNKNOWN_ROUTE: {
      HEADING: 'Uh-oh! Something is not right.',
      DESCRIPTION: 'I couldn\'t find what you were looking for.',
    },
  },

  HOME: {
    BUTTON_LABEL_CREATE_REPORT: 'Create new report',
    HEADER_LABEL_PUBLISH_CONFIGS: 'Publish configurations',
    HEADING: 'Reports',
  },

  BASIC_SCHEDULE_FORM: {
    DAYS_OF_WEEK_FIELD_PLACEHOLDER: 'Select days of week...',
    FIELD_LABEL_FREQUENCY: 'Frequency',
    FIELD_LABEL_PERIOD: 'Period',
    FIELD_LABEL_TIME_OF_DAY: 'Time',
    PERIOD_LABEL_DAY: 'Everyday',
    PERIOD_LABEL_DAY_OF_WEEK: 'Day of week',
    PERIOD_LABEL_WEEKDAYS: 'Weekdays (Mon-Fri)',
    PERIOD_LABEL_WEEKENDS: 'Weekends (Sat-Sun)',
    PERIOD_LABEL_SUNDAY: 'Sunday',
    PERIOD_LABEL_MONDAY: 'Monday',
    PERIOD_LABEL_TUESDAY: 'Tuesday',
    PERIOD_LABEL_WEDNESDAY: 'Wednesday',
    PERIOD_LABEL_THURSDAY: 'Thursday',
    PERIOD_LABEL_FRIDAY: 'Friday',
    PERIOD_LABEL_SATURDAY: 'Saturday',
    PERIOD_VALUE_EVERYDAY: 'day',
    PERIOD_LABEL_WEEK_OF_MONTH: 'Week of month',
    PERIOD_LABEL_WEEK_ONE: 'Week one',
    PERIOD_LABEL_WEEK_TWO: 'Week two',
    PERIOD_LABEL_WEEK_THREE: 'Week three',
    PERIOD_LABEL_WEEK_FOUR: 'Week four',
    PERIOD_VALUE_WEEKDAYS: 'weekdays',
    PERIOD_VALUE_WEEKENDS: 'weekends',
    FREQUENCY_LABEL_DAILY: 'Daily',
    FREQUENCY_LABEL_WEEKLY: 'Weekly',
    FREQUENCY_LABEL_MONTHLY: 'Monthly',
    FREQUENCY_VALUE_DAILY: 'daily',
    FREQUENCY_VALUE_WEEKLY: 'weekly',
    FREQUENCY_VALUE_MONTHLY: 'monthly',
  },
  CHANNELS_FIELD: {
    BUTTON_LABEL_ADD_CHANNEL: 'Add channel',
    DELETE_PROMPT: 'Are you sure you want to delete this channel?',
    FIELD_LABEL_CHANNELS_CUSTOM: 'Channels',
    HEADER_LABEL_DETAILS: 'Details',
    NO_CHANNELS_MESSAGE: 'No channels are defined.',
  },
  DASHBOARDS_FORM: {
    BUTTON_LABEL_SELECT_DASHBOARDS: 'Select dashboards',
    FIELD_LABEL_DASHBOARDS_CUSTOM: 'Dashboards',
    NO_DASHBOARDS_MESSAGE: 'No dashboards are selected.',
  },
  DASHBOARD_PICKER: {
    HEADING: 'Select dashboards',
  },
  EDIT_CHANNEL_FORM: {
    CHANNEL_TYPE_LABEL_EMAIL: 'Email',
    CHANNEL_TYPE_LABEL_SLACK: 'Slack',
    HEADING: 'Edit channel',
    FIELD_LABEL_CHANNEL_TYPE: 'Type',
  },
  EDIT_CHANNEL_SCREEN: {
    CANCEL_PROMPT: 'You have made changes to this channel. Are you sure you want to cancel?',
  },
  EDIT_REPORT_FORM: {
    FIELD_LABEL_ENABLED: 'Enabled',
    FIELD_LABEL_NAME: 'Name',
    FIELD_LABEL_TYPE: 'Type',
    HEADING: 'Edit report',
    REPORT_NAME_FIELD_PLACEHOLDER: 'Weekly Performance Dashboards Report',
    REPORT_TYPE_LABEL_DASHBOARD: 'Dashboard',
    REPORT_TYPE_LABEL_QUERY: 'Query',
    FORM_ERROR_TITLE: 'Uh-oh! Something is not right.',
    FORM_ERROR_DESCRIPTION: msg => `The unexpected can be frightening: ${msg}`,
    SAVE_ERROR_TITLE: 'Save failed',
    SAVE_ERROR_DESCRIPTION: msg => `Your data could not be saved: ${msg}`,
    SAVE_SUCCESS_TITLE: 'Report saved',
    SAVE_SUCCESS_DESCRIPTION: name => `The report "${name}" was saved.`
  },
  EDIT_REPORT_SCREEN: {
    CANCEL_PROMPT: 'You have made changes to this report. Are you sure you want to cancel?',
  },
  EDIT_PUBLISH_CONFIG_SCREEN: {
    CANCEL_PROMPT: 'You have made changes to this publish configuration. Are you sure you want to cancel?',
  },
  EDIT_PUBLISH_CONFIG_FORM: {
    CONFIG_NAME_FIELD_PLACEHOLDER: 'email-team',
    FIELD_LABEL_ENABLED: 'Enabled',
    FIELD_LABEL_NAME: 'Name',
    HEADING: 'Edit publish configuration',
  },
  EMAIL_CHANNEL_FORM: {
    CC_FIELD_PLACEHOLDER: `robin@newrelic.com\npat@newrelic.com`,
    FIELD_LABEL_CC: 'Cc',
    FIELD_LABEL_FORMAT: 'Format',
    FIELD_LABEL_QUERY_DELIVERY_METHOD: 'Delivery method',
    FIELD_LABEL_SUBJECT: 'Subject',
    FIELD_LABEL_TEMPLATE: 'Message template',
    FIELD_LABEL_TO: 'To',
    FORMAT_LABEL_HTML: 'HTML',
    FORMAT_LABEL_TEXT: 'Text',
    QUERY_DELIVERY_METHOD_LABEL_ATTACH: 'Deliver the query results in CSV format as a file attachment',
    QUERY_DELIVERY_METHOD_LABEL_PASSTHROUGH: 'Deliver the query results in CSV format as the message of the email. The email message field will be ignored.',
    QUERY_DELIVERY_METHOD_INPUT_NAME: 'emailQueryDeliveryMethod',
    SUBJECT_FIELD_PLACEHOLDER: 'This week\'s performance report',
    TEMPLATE_FIELD_PLACEHOLDER: `Please find attached the performance dashboards for report {{name}}.`,
    TO_FIELD_PLACEHOLDER: `jan@newrelic.com\nsam@newrelic.com`,
  },
  NRQL_EDITOR: {
    QUERY_FIELD_PLACEHOLDER: 'SELECT count(*) FROM Transaction FACET appName',
  },
  PUBLISH_CONFIGS_FIELD: {
    BUTTON_LABEL_ADD_CONFIG: 'Add configuration',
    DELETE_PROMPT: 'Are you sure you want to delete this publish configuration?',
    FIELD_LABEL_PUBLISH_CONFIGS_CUSTOM: 'Publish configurations',
    HEADER_LABEL_SCHEDULE: 'Schedule',
    HEADER_LABEL_CHANNELS: 'Channels',
    NO_CONFIGS_MESSAGE: 'No publish configurations are defined.',
  },
  QUERY_FORM: {
    FIELD_LABEL_ACCOUNTS: 'Accounts',
    ACCOUNTS_FIELD_PLACEHOLDER: 'Select accounts...',
    FIELD_LABEL_QUERY: 'Query',
    QUERY_FIELD_PLACEHOLDER: 'SELECT count(*) FROM Transaction FACET appName',
  },
  REPORT_LIST: {
    HEADING: 'Reports',
  },
  SCHEDULE_FIELD: {
    BUTTON_LABEL_EDIT_SCHEDULE: 'Edit schedule',
    FIELD_LABEL_SCHEDULE_CUSTOM: 'Schedule',
  },
  SLACK_CHANNEL_FORM: {
    CC_FIELD_PLACEHOLDER: `robin@newrelic.com\npat@newrelic.com`,
    FIELD_LABEL_WEBHOOK_URL: 'Webhook URL',
    WEBHOOK_URL_FIELD_PLACEHOLDER: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
  },
}
