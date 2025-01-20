import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Avatar } from '@mui/material';

export default function BlogDetails() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState([]);
  const { blogId } = useParams();

  const fetchBlogs = () => {
    axios
      .get(`https://app.myreeldream.ai/api/v1/blog/`)
      .then((res) => {
        let filterBlogs = res.data.filter((x) => x._id === blogId);
        setBlogs(filterBlogs);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBlogs();
  }, [blogId]);
  const post = {
    title: 'First Post',
    content: 'Content of the first post. This is just a dummy content for demonstration purposes.',
    author: {
      name: 'John Doe',
      picture: 'https://via.placeholder.com/50',
    },
    date: 'March 18, 2024',
    image: 'https://picsum.photos/id/3/5000/3333',
  };


  return (
    <>
      <Card style={{ maxWidth: 600, margin: 'auto', marginTop: 20, padding: 20, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <CardMedia
          component="img"
          height="300"
          image={post.image}
          title={post.title}
        />
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {post.content}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={post.author.picture} alt={post.author.name} />
            <Typography variant="body2" style={{ marginLeft: 5, fontWeight: 'bold' }}>
              {post.author.name}
            </Typography>
          </div>
          <Typography variant="body2" style={{ color: 'gray', marginTop: 5 }}>
            {post.date}
          </Typography>
        </CardContent>
      </Card>
      {/* <main>
        { (
          <div className="container-fluid">
            <div >
              <div className="d-flex align-items-center">
                <h2>
                  {blogs[0]?.title}
                </h2>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={
                    blogs[0]?.image
                  }
                  alt={blogs[0]?._id}
                  className="img-fluid"
                  style={{ width: '100%' }}
                />
              </div>
              <div
                className="my-5"
                dangerouslySetInnerHTML={{ __html: blogs[0]?.content }}
              ></div>
            </div>
          </div>
        )}
      </main> */}
    </>
  );
}

// export async function getStaticPaths() {
//   const req = await fetch(`${global.BackendUrlMain}/blogs`);
//   const data = await req.json();

//   const paths = data?.map((item) => ({
//     params: { slug: item.blogs_slug },
//   }));
//   return { paths, fallback: "blocking" };
// }

// export async function getStaticProps(context) {
//   const { slug } = context.params;
//   const req = await fetch(`${global.BackendUrlMain}/blogs`);
//   const data = await req.json();

//   const blog = data?.find((x) => x?.blogs_slug === slug);

//   return {
//     props: {
//       blog,
//     },
//     revalidate: 10, // In seconds
//   };
// }
