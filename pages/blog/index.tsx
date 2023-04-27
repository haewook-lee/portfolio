import React, { useEffect, useState } from "react"
import client from "../../lib/sanity"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Head from "next/head"
import { GetStaticProps } from "next"

export default function BlogHome({ data }: any) {
  // const [blogs, setBlogs] = useState<any[]>([])

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[_type == "post"] | order(published desc){
  //     title,
  //     "slug": slug.current,
  //     mainImage{
  //       asset->{
  //           path,
  //           url
  //       }
  //     },
  //     categories,
  //     publishedAt
  //   }`
  //     )
  //     .then((data: any) => setBlogs(data))
  //     .catch(console.error)
  // }, [])

  const blogs = data

  return (
    <>
      <Head>
        <title>Blog - Haewook Lee</title>
      </Head>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            //   bgcolor: "background.paper",
            pt: 8,
            //   pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              // align="center"
              color="#f2f2f2"
              gutterBottom
            >
              Blog
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 4, maxWidth: 680, mx: "auto" }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {blogs &&
              blogs.map((blog: any) => (
                <Grid item key={blog}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        md: "row",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={blog.mainImage.asset.url}
                      alt="movie poster"
                      sx={{
                        width: {
                          md: 1 / 4,
                        },
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {blog.title}
                      </Typography>
                      <Typography gutterBottom component="p">
                        {new Date(blog.publishedAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </Typography>
                      <Button
                        sx={{
                          color: "#112d32",
                        }}
                        size="small"
                        href={"/blog/" + blog.slug}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
    </>
  )
}

const blogsQuery = `*[_type == "post"] | order(published desc){
    title,
    "slug": slug.current,
    mainImage{
      asset->{
          path, 
          url
      }
    },
    categories,
    publishedAt
  }`

export const getStaticProps: GetStaticProps = async () => {
  const blog = await client.fetch(blogsQuery)

  return {
    props: {
      data: blog,
    },
  }
}
