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
