import { baseMeta } from '~/utils/meta';
import { useMemo, lazy } from "react";
import styles from './../projects.smart-sparrow/earth.module.css';
import {
    ProjectBackground,
    ProjectContainer,
    ProjectHeader,
    ProjectImage,
    ProjectSection,
    ProjectSectionColumns,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
  } from '~/layouts/project';

export const meta = () => {
  return baseMeta({
    title: 'Traveling',
    description: 'A list of hardware and software I use to do my thing',
  });
};

const Earth = lazy(() => import('./../projects.smart-sparrow/earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./../projects.smart-sparrow/earth').then(module => ({ default: module.EarthSection }))
);

export const Traveling = () => {
    return (
        <>
            <Earth
              className={styles.earth}
              hideMeshes={useMemo(
                () => ['Atmosphere', 'EarthPartial', 'EarthFull'],
                []
              )}
              position={useMemo(() => [0, 0, 0], [])}
              labels={useMemo(
                () => [
                  {
                    position: [-0.37, 0.44, 0.20],
                    text: 'Chișinău',
                    hidden: true,
                  },
                  {
                    position: [-0.41, 0.39, 0.19],
                    text: 'Thasos',
                    hidden: true,
                  },
                  {
                    position: [-0.33, 0.49, 0.11],
                    text: 'Gdańsk',
                    hidden: true,
                  },
                  {
                    position: [-0.33, 0.50, 0.08],
                    text: 'København',
                    hidden: true,
                  }
                ],
                []
              )}
              scale={0.6}
            >
              <EarthSection
                scrim
                animations={['0:loop']}
                camera={[0, 0, 1.5]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>
                        Discover the World, Discover Yourself
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        Traveling isn’t just about visiting new places—it’s about experiencing life 
                        from different perspectives. Every journey you take opens doors to new cultures, 
                        new stories, and new versions of yourself.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[0, 0, 2.4]}
                meshes={['Atmosphere', 'EarthFull']}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[-0.82, 0.95, 0.41]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                      Moldova – My Home, My Roots                      
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        Moldova is more than just where I was born—it’s the place that shaped me. A small yet 
                        beautiful country in Eastern Europe, it’s known for its rolling vineyards, rich traditions, 
                        and warm hospitality. Life here is simple but meaningful, filled with deep cultural roots 
                        and a strong sense of community.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[-0.91, 1.05, 0.21]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Chișinău',
                  'Thasos',
                  'Gdańsk',
                  'København',
                ]}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Adventure Awaits!
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                      Visited: Thasos, Gdańsk, København.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[-0.91, 1.05, 0.21]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Chișinău',
                  'Thasos',
                  'Gdańsk',
                  'København',
                ]}
              />
              {/* <EarthSection
                animations={['0:loop']}
                camera={[1.81, 0.51, 0.43]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Pacific ring of fire',
                  'Ruapehu',
                  'St. Helens',
                  'Krakatoa',
                  'Parícutin',
                  'Kīlauea',
                ]}
              />
              <EarthSection
                scrimReverse
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['Atmosphere', 'EarthFull']}
              /> */}
            </Earth>
        </>

    );
};