import { useEffect, useState } from 'react';
import { truncate } from 'lodash';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Knowledge() {
  const [knowledgeData, setKnowledgeData] = useState([]);
  // const [knowledgeSeo, setKnowledgeSeo] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`https://app.myreeldream.ai/api/v1/knowledge/`),
      // axios.get(`${global.BackendUrlMain}/knowledgepageseo`),
    ])
      .then((responses) => {
        setKnowledgeData(responses[0]?.data);
        // setKnowledgeSeo(responses[1]?.data);
      })
      .catch((error) => error);
  }, []);

  const YouTubeVideo = ({ videoLink }) => {
    const getVideoId = (link) => {
      const regex =
        /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
      const match = link.match(regex);
      return match ? match[1] : null;
    };

    const videoId = getVideoId(videoLink);

    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        style={{ width: '100%', objectFit: 'cover' }}
        height={300}
      />
    );
  };

  return (
    <>
      {/* <title>{knowledgeSeo[0]?.meta_title}</title>
      <meta
        name='keywords'
        content={
          knowledgeSeo?.length
            ? JSON.parse(knowledgeSeo[0]?.meta_keywords)
            : null
        }
      />
      <meta name='description' content={knowledgeSeo[0]?.meta_description} /> */}
      <section id="knowledge" style={{height:'300px', border:'1px solid green'}}>   
      <h2 style={{ marginLeft: '1vw' }}>Knowledge</h2>
    </section>
      <main className='w-auto h-auto d-flex flex-column mt-5'>
        <div className='shc-dashboard-container'>
          <div className='row row-gap-lg-0 row-gap-4'>
            {knowledgeData?.map((t, i) => (
              <div key={i} className='col-lg-4 col-md-6 col-sm-6 col-12'>
                <div className='card border-0 shadow-sm border-white'>
                  <div className='overflow-hidden rounded-3'>
                    <YouTubeVideo videoLink={t?.link} />
                  </div>
                  <div className='card-body'>
                    <h4 className='m-0 fw-semibold'>
                      {truncate(t.title, { length: 65 })}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = await fetch(`${global.BackendUrlMain}/knowledge`);
//   const seoreq = await fetch(`${global.BackendUrlMain}/knowledgepageseo`);

//   const data = await req.json();
//   const seo = await seoreq.json();
//   return {
//     props: {
//       data,
//       seo,
//     },
//   };
// }
