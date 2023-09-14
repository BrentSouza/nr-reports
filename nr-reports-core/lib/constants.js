'use strict'

// Common keys
const TEMPLATE_NAME_KEY = 'templateName',
  OUTPUT_FILE_NAME_KEY = 'outputFileName',
  INCLUDE_DIR_NAME = 'include'

// Engine option constants
const MANIFEST_FILE_PATH_OPTION = 'manifestFilePath',
  MANIFEST_FILE_PATH_VAR = 'MANIFEST_FILE_PATH',
  TEMPLATE_NAME_OPTION = TEMPLATE_NAME_KEY,
  TEMPLATE_NAME_VAR = 'TEMPLATE_NAME',
  VALUES_FILE_PATH_OPTION = 'valuesFilePath',
  VALUES_FILE_PATH_VAR = 'VALUES_FILE_PATH',
  OUTPUT_FILE_NAME_OPTION = OUTPUT_FILE_NAME_KEY,
  DASHBOARD_IDS_OPTION = 'dashboardIds',
  DASHBOARD_IDS_VAR = 'DASHBOARD_IDS',
  NRQL_QUERY_OPTION = 'nrqlQuery',
  NRQL_QUERY_VAR = 'NRQL_QUERY',
  CHANNEL_IDS_OPTION = 'channelIds',
  CHANNEL_IDS_VAR = 'CHANNEL_IDS',
  SOURCE_NERDLET_ID_OPTION = 'sourceNerdletId',
  SOURCE_NERDLET_ID_VAR = 'SOURCE_NERDLET_ID'

// Manifest file constants
const REPORT_NAMES_OPTION = 'reportNames',
  REPORT_NAMES_VAR = 'REPORT_NAMES',
  DEFAULT_MANIFEST_FILE_NAME = 'manifest.json',
  DEFAULT_MANIFEST_FILE_PATH = `${INCLUDE_DIR_NAME}/${DEFAULT_MANIFEST_FILE_NAME}`

// Template generator constants
const NO_RENDER_OPTION = 'noRender'

// Dashboard generator constants
const COMBINE_PDFS_KEY = 'combinePdfs'

// Query generator constants
const DEFAULT_QUERY_REPORT_NAME = 'query-report'

// Nerdstorage constants
const MANIFESTS_COLLECTION_NAME = 'manifests'

// Email channel constants
const EMAIL_SMTP_SERVER_VAR = 'EMAIL_SMTP_SERVER',
  EMAIL_SMTP_PORT_VAR = 'EMAIL_SMTP_PORT',
  EMAIL_SMTP_SECURE_VAR = 'EMAIL_SMTP_SECURE',
  EMAIL_SMTP_USER_VAR = 'EMAIL_SMTP_USER',
  EMAIL_SMTP_PASS_VAR = 'EMAIL_SMTP_PASS',
  EMAIL_FROM_VAR = 'EMAIL_FROM',
  EMAIL_TO_VAR = 'EMAIL_TO',
  EMAIL_SUBJECT_VAR = 'EMAIL_SUBJECT',
  EMAIL_TEMPLATE_NAME_KEY = 'emailTemplateName',
  EMAIL_TEMPLATE_VAR = 'EMAIL_TEMPLATE',
  EMAIL_FILE_TEMPLATE_VAR = 'EMAIL_FILE_TEMPLATE',
  EMAIL_SMTP_PORT_DEFAULT = 587,
  EMAIL_FROM_KEY = 'from',
  EMAIL_TO_KEY = 'to',
  EMAIL_SUBJECT_KEY = 'subject',
  EMAIL_TEMPLATE_DEFAULT = 'email/message.html',
  EMAIL_ATTACHMENTS_TEMPLATE_DEFAULT = 'email/message-attachments.html'

// File channel constants
const FILE_DEST_DIR_VAR = 'FILE_DEST_DIR',
  FILE_TEMPLATE_VAR = 'FILE_TEMPLATE',
  FILE_DEST_DIR_KEY = 'destDir',
  FILE_TEMPLATE_NAME_KEY = 'fileTemplateName',
  FILE_DEST_DIR_DEFAULT = '.'

// S3 channel constants
const S3_DEST_BUCKET_VAR = 'S3_DEST_BUCKET',
  S3_DEST_BUCKET_KEY = 'bucket',
  S3_SOURCE_BUCKET_VAR = 'S3_SOURCE_BUCKET',
  S3_SOURCE_BUCKET_KEY = 'sourceBucket'

// Slack channel constants
const SLACK_WEBHOOK_URL = 'SLACK_WEBHOOK_URL'

module.exports = {

  // Common keys
  TEMPLATE_NAME_KEY,
  OUTPUT_FILE_NAME_KEY,
  INCLUDE_DIR_NAME,

  // Engine options
  MANIFEST_FILE_PATH_OPTION,
  MANIFEST_FILE_PATH_VAR,
  TEMPLATE_NAME_OPTION,
  TEMPLATE_NAME_VAR,
  VALUES_FILE_PATH_OPTION,
  VALUES_FILE_PATH_VAR,
  OUTPUT_FILE_NAME_OPTION,
  DASHBOARD_IDS_OPTION,
  DASHBOARD_IDS_VAR,
  NRQL_QUERY_OPTION,
  NRQL_QUERY_VAR,
  CHANNEL_IDS_OPTION,
  CHANNEL_IDS_VAR,
  SOURCE_NERDLET_ID_OPTION,
  SOURCE_NERDLET_ID_VAR,

  // Manifest file constants
  REPORT_NAMES_OPTION,
  REPORT_NAMES_VAR,
  DEFAULT_MANIFEST_FILE_NAME,
  DEFAULT_MANIFEST_FILE_PATH,

  // Template generator constants
  NO_RENDER_OPTION,

  // Dashboard generator constants
  COMBINE_PDFS_KEY,

  // Query generator constants
  DEFAULT_QUERY_REPORT_NAME,

  // Nerdstorage constants
  MANIFESTS_COLLECTION_NAME,

  // Email channel constants
  EMAIL_SMTP_SERVER_VAR,
  EMAIL_SMTP_PORT_VAR,
  EMAIL_SMTP_SECURE_VAR,
  EMAIL_SMTP_USER_VAR,
  EMAIL_SMTP_PASS_VAR,
  EMAIL_FROM_VAR,
  EMAIL_TO_VAR,
  EMAIL_SUBJECT_VAR,
  EMAIL_TEMPLATE_NAME_KEY,
  EMAIL_TEMPLATE_VAR,
  EMAIL_FILE_TEMPLATE_VAR,
  EMAIL_SMTP_PORT_DEFAULT,
  EMAIL_TEMPLATE_DEFAULT,
  EMAIL_ATTACHMENTS_TEMPLATE_DEFAULT,
  EMAIL_FROM_KEY,
  EMAIL_TO_KEY,
  EMAIL_SUBJECT_KEY,

  // File channel constants
  FILE_DEST_DIR_VAR,
  FILE_TEMPLATE_VAR,
  FILE_DEST_DIR_KEY,
  FILE_TEMPLATE_NAME_KEY,
  FILE_DEST_DIR_DEFAULT,

  // S3 channel constants
  S3_DEST_BUCKET_VAR,
  S3_DEST_BUCKET_KEY,
  S3_SOURCE_BUCKET_VAR,
  S3_SOURCE_BUCKET_KEY,

  // Slack channel constants
  SLACK_WEBHOOK_URL,
}
