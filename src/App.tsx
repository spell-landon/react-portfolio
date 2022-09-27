import { useState, useEffect } from 'react';
import { Layout } from './components/global/Layout';
import { Navigation } from './components/Navigation';
import { Welcome } from './pages/Welcome';
import { Projects } from './components/Projects';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import { ProjectPage } from './pages/ProjectPage';
import { NotFound } from './pages/NotFound';
import { DataProps, ProjectDataProps } from './lib/types';
import { colorSets } from './lib/colorSets';
import _ from 'lodash';

function App() {
  let params = useParams();
  let { pathname } = useLocation();

  const [bioData, setBioData] = useState<DataProps>();
  const [projectData, setProjectData] = useState<ProjectDataProps[]>([]);

  let PROJECT_ID = 'x2qyyifc';
  let DATASET = 'production';
  let QUERY = encodeURIComponent('*[_type == "bio"]');
  let PROJECT_QUERY = encodeURIComponent('*[_type == "project"]');

  // Compose the URL for your project's endpoint and add the query
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  let PROJECTS_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${PROJECT_QUERY}`;
  // fetch the bio content
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setBioData(res.result[0]);
      })
      .catch((err) => console.error(err));
  }, []);
  // fetch the projects content
  useEffect(() => {
    fetch(PROJECTS_URL)
      .then((res) => res.json())
      .then((res) => {
        setProjectData(res.result);
      })
      .catch((err) => console.error(err));
  }, []);

  const [colorVariant, setColorVariant] = useState(colorSets[0]);
  useEffect(() => {
    setColorVariant(_.sample(colorSets));
  }, [pathname]);

  return (
    <div className='bg-darkGray h-screen w-screen flex justify-center items-start lg:items-center p-4'>
      <Layout colorVariant={colorVariant}>
        <header className='w-full'>
          <Navigation />
        </header>

        <main className='flex gap-8 justify-between flex-col lg:flex-row'>
          <Routes>
            <Route
              path='/'
              element={<Welcome data={bioData} colorVariant={colorVariant} />}
            />
            <Route
              path='/projects/:title'
              element={
                <ProjectPage data={projectData} colorVariant={colorVariant} />
              }
            />
            <Route
              path='*'
              element={<NotFound colorVariant={colorVariant} />}
            />
          </Routes>
          <Projects data={projectData} colorVariant={colorVariant} />
        </main>
      </Layout>
    </div>
  );
}

export default App;
