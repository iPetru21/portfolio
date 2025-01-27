import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Frontend Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    My primary frontend framework is <Link href="https://remix.run/">Remix</Link>. 
                    I love its focus on performance, nested routing, and server-side rendering, making it an ideal choice for modern web applications.
                  </ListItem>
                  <ListItem>
                    <Link href="https://react.dev/">React</Link> is the core of my development workflow. 
                    With its component-driven architecture, it's my go-to for building scalable and interactive UIs.
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://framer.com/motion/">Framer Motion</Link> for adding smooth animations 
                    and enhancing the user experience in my React projects.
                  </ListItem>
                  <ListItem>
                    To fetch and manage data efficiently, I use <Link href="https://graphql.org/">GraphQL</Link> 
                    with <Link href="https://www.apollographql.com/">Apollo Client</Link>. It allows for declarative and optimized data fetching.
                  </ListItem>
                  <ListItem>
                    For headless CMS and content-driven applications, I integrate <Link href="https://wordpress.org/">WordPress</Link> 
                    as a backend and consume its data via the GraphQL API.
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://storybook.js.org/">Storybook</Link> to develop UI components in isolation, 
                    ensuring design consistency across my applications.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Backend & API Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    My backend stack revolves around <Link href="https://nodejs.org/">Node.js</Link> and <Link href="https://expressjs.com/">Express.js</Link> 
                    for building scalable APIs.
                  </ListItem>
                  <ListItem>
                    I work extensively with <Link href="https://wordpress.org/">WordPress</Link> as a headless CMS, 
                    utilizing <Link href="https://www.wpgraphql.com/">WPGraphQL</Link> to efficiently query data for frontend applications.
                  </ListItem>
                  <ListItem>
                    I leverage <Link href="https://graphql.org/">GraphQL</Link> and <Link href="https://www.apollographql.com/">Apollo Server</Link> 
                    to create flexible, declarative APIs that fetch only the data needed.
                  </ListItem>
                  <ListItem>
                    I use <Link href="https://www.postgresql.org/">PostgreSQL</Link> for relational databases 
                    and <Link href="https://www.mongodb.com/">MongoDB</Link> for NoSQL-based applications.
                  </ListItem>
                  <ListItem>
                    Authentication and security are handled with <Link href="https://next-auth.js.org/">NextAuth</Link> 
                    or <Link href="https://auth0.com/">Auth0</Link>, ensuring secure user authentication.
                  </ListItem>
                  <ListItem>
                    I utilize serverless computing with <Link href="https://vercel.com/">Vercel</Link> and <Link href="https://www.netlify.com/">Netlify</Link> 
                    to deploy high-performance, scalable web applications.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>DevOps & Tooling</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://vscodium.com/">VSCodium</Link> as my primary code editor, 
                    with extensions for GraphQL, Remix, and Tailwind.
                  </ListItem>
                  <ListItem>
                    My version control workflow is powered by <Link href="https://git-scm.com/">Git</Link> 
                    with repositories hosted on <Link href="https://github.com/">GitHub</Link> and <Link href="https://gitlab.com/">GitLab</Link>.
                  </ListItem>
                  <ListItem>
                    I implement CI/CD pipelines with <Link href="https://github.com/features/actions">GitHub Actions</Link> 
                    for automating deployments and testing.
                  </ListItem>
                  <ListItem>
                    For server and API performance monitoring, I use <Link href="https://sentry.io/">Sentry</Link> 
                    and <Link href="https://www.datadoghq.com/">Datadog</Link> to track and resolve issues quickly.
                  </ListItem>
                  <ListItem>
                    My go-to cloud deployment platforms include <Link href="https://vercel.com/">Vercel</Link> 
                    and <Link href="https://www.digitalocean.com/">DigitalOcean</Link>, offering seamless integration with Remix and GraphQL.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Custom built</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Arch Linux (by the way)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Zen Browser</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Tofu65</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G403</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 14″</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Audio Technica ATH-M50x/Apple Airpods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
