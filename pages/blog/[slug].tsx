import client from "../../lib/sanity"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"

import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

export default function BlogPost({ data }: any) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#f2f2f2",
            my: 8,
            mx: "auto",
            p: 4,
            borderRadius: 3,
            maxWidth: 780,
          }}
        >
          <Typography component="h1" variant="h3" color="text.primary">
            {data.title}
          </Typography>
          <Typography
            sx={{ pt: 1 }}
            textAlign="right"
            component="p"
            color="text.primary"
            gutterBottom
          >
            {new Date(data.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </Typography>
          <Container
            sx={{
              bgcolor: "#f2f2f2",
              py: 8,
              px: 0,
            }}
            maxWidth="md"
          >
            <CardMedia
              component="img"
              image={data.mainImage.asset.url}
              alt="splash image"
              sx={{
                mx: "auto",
                mb: 8,
                maxWidth: 500,
              }}
            />
            {data.body &&
              data.body.map((text: any) => {
                return (
                  <>
                    {text.style === "normal" ? (
                      <>
                        {text.children.map((blurb: any) => {
                          return (
                            <>
                              <Typography
                                sx={{
                                  py: 1,
                                  fontWeight: "400 !important",
                                }}
                                // gutterBottom
                                component="p"
                                color="text.primary"
                              >
                                {/* {data.body && data.body[0].children[0].text} */}
                                {/* {text.children[0].text} */}
                                {blurb.text}
                              </Typography>
                            </>
                          )
                        })}
                      </>
                    ) : (
                      <>
                        {text.children.map((blurb: any) => {
                          return (
                            <>
                              <Typography
                                sx={{
                                  py: 2,
                                }}
                                // gutterBottom
                                variant={text.style}
                                component={text.style}
                                color="text.primary"
                              >
                                {/* {data.body && data.body[0].children[0].text} */}
                                {/* {text.children[0].text} */}
                                {blurb.text}
                              </Typography>
                            </>
                          )
                        })}
                      </>
                    )}
                  </>
                )
              })}
          </Container>
        </Box>
      </main>
    </>
  )
}

const blogQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    mainImage{
        asset->{
            path, 
            url
        }
    },
    author,
    categories,
    publishedAt,
    body
}`

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`

  const paths = await client.fetch(query)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const options = { slug: params?.slug ?? `` }

  const blog = await client.fetch(blogQuery, options)

  return {
    props: {
      data: blog,
    },
  }
}
