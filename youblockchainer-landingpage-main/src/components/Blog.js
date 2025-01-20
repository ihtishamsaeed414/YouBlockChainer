import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Avatar, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const posts = [
    {
      _id: 1,
      title: 'First Post',
      content: 'Content of the first post',
      image: 'https://picsum.photos/id/3/5000/3333',
      author: {
        name: 'John Doe',
        picture: 'https://picsum.photos/200/300',
      },
      date: 'March 18, 2024'
    },
    {
      _id: 2,
      title: 'Second Post',
      content: 'Content of the second post',
      image: 'https://picsum.photos/id/29/4000/2670',
      author: {
        name: 'Jane Smith',
        picture: 'https://picsum.photos/200/300',
      },
      date: 'March 19, 2024'
    },
    {
      _id: 3,
      title: 'Third Post',
      content: 'Content of the third post',
      image: 'https://picsum.photos/id/9/5000/3269',
      author: {
        name: 'Alex Johnson',
        picture: 'https://picsum.photos/200/300',
      },
      date: 'March 20, 2024'
    },
    {
      _id: 4,
      title: 'Fourth Post',
      content: 'Content of the Fourth post',
      image: 'https://picsum.photos/id/3/5000/3333',
      author: {
        name: 'John Doe',
        picture: 'https://picsum.photos/200/300',
      },
      date: 'March 18, 2024'
    },
  ];

  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
  };

  useEffect(() => {
    const fetchBlogs = () => {
      setLoading(true);
      axios
        .get(`https://app.myreeldream.ai/api/v1/blog/`)
        .then((res) => {
          setBlogData(res.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <h2 style={{ marginLeft: '3.5vw', display: "flex", justifyContent: "center" }}>Blogs</h2>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {posts.slice(0, visiblePosts).map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
              <Link
                to={`/blog/${post._id}`}
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card style={{ marginBottom: '2rem' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h2">
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {post.content}
                      </Typography>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                          <Avatar src={post.author.picture} alt={post.author.name} style={{ marginRight: '0.5rem' }} />
                          <Typography variant="body2" color="textSecondary">
                            {post.author.name}
                          </Typography>
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: '1rem' }}>
                          {post.date}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center" }}>
          {visiblePosts < posts.length && (
            <Button style={{ border: "solid 1px", marginBottom: "3vw" }} color="primary" onClick={loadMorePosts}>
              Load More
            </Button>
          )}
        </Grid>
      </Container>
    </>
  );
}

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Container, Typography, Grid, Card, CardContent, CardMedia, Avatar, Button } from '@mui/material';

// export default function Blogs() {
//   const [blogData, setBlogData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [visiblePosts, setVisiblePosts] = useState(3);
//   const posts = [
//     {
//       _id: 1,
//       title: 'First Post',
//       content: 'Content of the first post',
//       image: 'https://picsum.photos/id/3/5000/3333',
//       author: {
//         name: 'John Doe',
//         picture: 'https://picsum.photos/200/300',
//       },
//       date: 'March 18, 2024'
//     },
//     {
//       _id: 2,
//       title: 'Second Post',
//       content: 'Content of the second post',
//       image: 'https://picsum.photos/id/29/4000/2670',
//       author: {
//         name: 'Jane Smith',
//         picture: 'https://picsum.photos/200/300',
//       },
//       date: 'March 19, 2024'
//     },
//     {
//       _id: 3,
//       title: 'Third Post',
//       content: 'Content of the third post',
//       image: 'https://picsum.photos/id/9/5000/3269',
//       author: {
//         name: 'Alex Johnson',
//         picture: 'https://picsum.photos/200/300',
//       },
//       date: 'March 20, 2024'
//     },
//     {
//       _id: 4,
//       title: 'Fourth Post',
//       content: 'Content of the Fourth post',
//       image: 'https://picsum.photos/id/3/5000/3333',
//       author: {
//         name: 'John Doe',
//         picture: 'https://picsum.photos/200/300',
//       },
//       date: 'March 18, 2024'
//     },
//   ];

//   const loadMorePosts = () => {
//     setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
//   };

//   useEffect(() => {
//     const fetchBlogs = () => {
//       setLoading(true);
//       axios
//         .get(`https://app.myreeldream.ai/api/v1/blog/`)
//         .then((res) => {
//           setBlogData(res.data);
//           setLoading(false);
//         })
//         .catch((error) => console.log(error));
//     };
//     fetchBlogs();
//   }, []);

//   return (
//     <>
//       {/* <Head>
//         <title>Blogs - My Reel Dream AI</title>
//       </Head> */}
//       <h2 style={{ marginLeft: '3.5vw' }}>Blogs</h2>
//       <Container maxWidth="lg">
//         <Grid container spacing={3}>
//           {posts.slice(0, visiblePosts).map((post) => (
//             <Grid item xs={12} sm={6} md={4} key={post.id}>
//               <Link
//                 to={`/blog/${post._id}`}
//                 style={{ textDecoration: "none" }}
//               >
//                 <Card style={{ marginBottom: '2rem' }}>
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={post.image}
//                     alt={post.title}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" component="h2">
//                       {post.title}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                       {post.content}
//                     </Typography>
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
//                       <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
//                         <Avatar src={post.author.picture} alt={post.author.name} style={{ marginRight: '0.5rem' }} />
//                         <Typography variant="body2" color="textSecondary">
//                           {post.author.name}
//                         </Typography>
//                       </div>
//                       <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: '1rem' }}>
//                         {post.date}
//                       </Typography>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//         <Grid style={{ display: "flex", justifyContent: "center" }}>
//           {visiblePosts < posts.length && (
//             <Button style={{ border: "solid 1px", marginBottom: "3vw" }} color="primary" onClick={loadMorePosts}>
//               Load More
//             </Button>
//           )}
//         </Grid>
//       </Container>
//       {/* <main>
//         <div className="shc-dashboard-container">
//           <div className="mt-5">
//             <div className={`row`}>
//               {
//               // !loading ?
//                (

//                 blogData?.map((b, i) => (
//                   <div
//                     key={i}
//                     className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
//                   >
//                     <Link
//                       to={`/blog/${b._id}`}
//                       className="text-decoration-none"
//                     >
//                       <div>
//                         <div className="d-flex align-items-center">
//                           <img
//                             src={`${b.image}`}
//                             alt={b.title}
//                             style={{ width: '100%' }}
//                           />
//                         </div>
//                         <div>
//                           <h2 className="m-0">{b.title}</h2>
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 ))
//               )
//               // : (
//               //   <div className="d-flex align-items-center justify-content-center">
//               //     <ThreeDots width={35} height={35} color="#0099ff" />
//               //   </div>
//               // )
//               }
//             </div>
//           </div>
//         </div>
//       </main> */}
//     </>
//   );
// }

// // export async function getServerSideProps(context) {
// //   const req = await fetch(`${global.BackendUrlMain}/blogs`);
// //   const blog = await req.json();
// //   return {
// //     props: {
// //       blog,
// //     },
// //   };
// // }
