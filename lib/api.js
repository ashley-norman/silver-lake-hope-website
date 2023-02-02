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
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
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

export async function getAllAnnounements(preview) {
  const entries = await fetchGraphQL(
    `query {
      announcementsCollection(limit: 10, preview: ${
        preview ? "true" : "false"
      }) {
        items {
          ${ANNOUNCEMENT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return entries?.data?.announcementsCollection?.items
}

export async function getLatestWaterTestResult() {
  const entries = await fetchGraphQL(
    `query {
      waterTestResultsCollection(limit: 1, order: resultsDate_DESC) {
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
    }`
  )
  const items = entries?.data?.waterTestResultsCollection?.items
  return items != null && items.length > 0 ? items[0] : null
}

export async function getBylawsDocuments() {
  const entries = await fetchGraphQL(
    `query {
      bylawsAndPoliciesCollection {
        items {
          title
          description
          documentation {
            url
            title
          }
        }
      }
    }`
  )
  return entries?.data?.bylawsAndPoliciesCollection?.items
}
