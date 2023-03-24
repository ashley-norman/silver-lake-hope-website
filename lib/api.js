const CALENDAR_GRAPHQL_FIELDS = `
eventTitle
description
family
startDateTime
endDateTime
allDayEvent
numberOfPeople
eventType
`

const ANNOUNCEMENT_GRAPHQL_FIELDS = `
title
publishDate
content
`

async function fetchGraphQL(query, preview = false) {
  const config = useRuntimeConfig()
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${config.contentfulSpaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? config.contentfulPreviewAccessToken
            : config.contentfulAccessToken
        }`,
      },
      body: JSON.stringify({ query }),
    }
  )
  return res.json()
}

export async function getAllAnnounements(
  { limit = 10, skip = 0 } = { limit: 10, skip: 0 },
  preview
) {
  const entries = await fetchGraphQL(
    `query {
      announcementsCollection(limit: ${limit}, skip: ${skip}, preview: ${
      preview ? "true" : "false"
    }) {
        items {
          ${ANNOUNCEMENT_GRAPHQL_FIELDS}
        }
        skip
        limit
        total
      }
    }`,
    preview
  )
  return entries?.data?.announcementsCollection
}

export async function getNewestAnnouncement(preview) {
  const entries = await fetchGraphQL(
    `query {
      announcementsCollection(limit: 1, order: publishDate_DESC, preview: ${
        preview ? "true" : "false"
      }) {
        items {
          ${ANNOUNCEMENT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return entries?.data?.announcementsCollection?.items[0]
}

export async function getLatestWaterTestResult(preview) {
  const entries = await fetchGraphQL(
    `query {
      waterTestResultsCollection(limit: 1, order: resultsDate_DESC, preview: ${
        preview ? "true" : "false"
      }) {
        items {
          pdf {
            size
            title
            width
            height
            fileName
            description
            linkedFrom {
              __typename
            }
            url
            
          }
          results
          resultsDate
          conforms
        }
      }
    }`,
    preview
  )
  const items = entries?.data?.waterTestResultsCollection?.items
  return items != null && items.length > 0 ? items[0] : null
}

export async function getBylawsDocuments(preview) {
  const entries = await fetchGraphQL(
    `query {
      bylawsAndPoliciesCollection(preview: ${preview ? "true" : "false"}) {
        items {
          title
          description
          documentation {
            url
            title
          }
        }
      }
    }`,
    preview
  )
  return entries?.data?.bylawsAndPoliciesCollection?.items
}
