// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "凌云·LinYun 状态监控",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://blog.linyunlink.top/', label: 'Blog' },
    { link: 'mailto:linyun@linyunlink.top', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
monitors: [
    // ==========[凌云服务监控]==========
    {
      id: 'linyun_homepage_monitor',
      name: '凌云·LinYun 主页',
      method: 'GET',
      target: 'https://www.linyunlink.top/',
      tooltip: '凌云·LinYun 博客',
      statusPageLink: 'https://www.linyunlink.top/',
    },
    {
      id: 'linyun_blog_monitor',
      name: '凌云·LinYun 博客',
      method: 'GET',
      target: 'https://blog.linyunlink.top/',
      tooltip: '凌云·LinYun 博客',
      statusPageLink: 'https://blog.linyunlink.top/',
    },
    {
      id: 'linyun_drive_monitor',
      name: '凌云·LinYun 网盘',
      method: 'GET',
      target: 'https://drive.linyunlink.top/',
      tooltip: '凌云·LinYun 网盘',
      statusPageLink: 'https://drive.linyunlink.top/',
    },
    {
      id: 'linyun_twikoo_monitor',
      name: '凌云·LinYun Twikoo评论系统',
      method: 'POST',
      target: 'https://twikoo.linyunlink.top/',
      tooltip: '凌云·LinYun Twikoo 评论服务API',
      statusPageLink: 'https://twikoo.linyunlink.top/',
    },
    {
      id: 'linyun_image_monitor',
      name: '凌云·LinYun 图片托管',
      method: 'GET',
      target: 'https://image.linyunlink.top/',
      tooltip: '凌云·LinYun 图片托管API',
      statusPageLink: 'https://image.linyunlink.top/',
    }
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['foo_monitor', 'bar_monitor'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: 'Test Maintenance',
    // Description of the maintenance, will be shown at status page
    body: 'This is a test maintenance, server software upgrade',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2020-01-01T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    end: '2050-01-01T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
