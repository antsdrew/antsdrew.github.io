import { ANALYTICS_WORKSPACE, ANALYTICS_API_KEY } from '../config/analytics.js'

const BASE = 'https://api.counterapi.dev/v2'
const configured = Boolean(ANALYTICS_WORKSPACE && ANALYTICS_API_KEY)

function extractCount(json) {
  const data = json && json.data
  if (typeof data === 'number') return data
  if (data && typeof data === 'object') {
    return data.up_count ?? data.count ?? null
  }
  return null
}

async function request(name, action) {
  if (!configured) return null
  const path = action ? `${name}/${action}` : name
  try {
    const res = await fetch(`${BASE}/${ANALYTICS_WORKSPACE}/${path}`, {
      headers: { Authorization: `Bearer ${ANALYTICS_API_KEY}` },
    })
    if (!res.ok) return null
    return extractCount(await res.json())
  } catch {
    return null
  }
}

export function isAnalyticsConfigured() {
  return configured
}

export async function bumpCounter(name) {
  return request(name, 'up')
}

export async function getCounter(name) {
  return request(name, '')
}
