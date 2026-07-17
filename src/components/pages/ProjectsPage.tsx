import {
  ChakraProvider,
  Carousel,
  Grid,
  GridItem,
  Image,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { system } from "../../../src/chakra-system";
import bioBg from "../../../public/bio-bg.jpg";
import projectOne from "../../assets/projects-images/project-0.png";
import projectThree from "../../assets/projects-images/project-3.png";
import projectTwo from "../../assets/projects-images/project-2.png";
import projectFour from "../../assets/projects-images/project-5.png";
import projectFive from "../../assets/projects-images/project-1.png";


const PROJECTS_DATA = [
  {
    id: 1,
    shortDescription:
      "A full-stack e-commerce storefront built with Next.js, React, and Chakra UI, backed by MedusaJS.",
    description: `A full-stack e-commerce platform with a Next.js and
     React front end styled using Chakra UI. The interface features dynamic
      product listings, category filtering, and complete cart-to-checkout flows,
       optimized for responsiveness. On the backend, MedusaJS powers products, 
       inventory, and orders through a modular API architecture. Close collaboration
        with the backend engineer ensured alignment between data models and front-end
         state management. Server-side rendering via Next.js delivers fast load times
          and strong SEO for product pages.`,
    image: projectOne,
    link: "https://www.guibeauty.com/en",
  },
  {
    id: 2,
    shortDescription: `A modern blog interface with categories, post previews, and
                interactive design using Next JS, Tailwind CSS, and TypeScript.`,
    description: `A modern blog platform built with Next.js for routing and 
    server-side rendering, using TypeScript for type safety throughout. 
    Tailwind CSS enables a utility-first design system for rapid, 
    consistent styling. The app supports categorized browsing alongside 
    dynamic post preview cards showing titles and excerpts. 
    Interactive elements like hover states and transitions improve engagement.
    Components are structured for reusability and scalable content growth.`,
    image: projectTwo,
    link: "https://bloggedapp.vercel.app/",
  },
  {
    id: 3,
    shortDescription: `A responsive portfolio and e-commerce store interface with 
      product listings, cart UI, and smooth navigation using Astro web framework.`,
    description: `A responsive e-commerce storefront built with Astro, 
    leveraging its island-based rendering for minimal JavaScript overhead. 
    Product listings support easy browsing and filtering, styled for a familiar
     retail-shopping experience. The cart UI and navigation remain interactive
      despite Astro's largely static architecture. Smooth client-side transitions
       avoid full page reloads, improving perceived performance. The project
        showcases Astro's hybrid model, combining static generation with selective hydration.`,
    image: projectFive,
    link: "https://dummy- portfolio-ecommerce.netlify.app/",
  },
  {
    id: 4,
    shortDescription: ` A modern ticket management web application built with React,
                JavaScript, TypeScript, and Vite. Features secure
                authentication, full CRUD operations, and real-time dashboard
                statistics.`,
    description: `A ticket management system built with React and Vite,
     using TypeScript for type safety across components and state. 
     Secure authentication controls access, alongside full CRUD 
     functionality for creating and resolving tickets. 
     A real-time dashboard surfaces live statistics on ticket volume
      and status. Vite's fast dev server and optimized builds improved 
      iteration speed. The architecture separates data-fetching, UI, 
      and state logic for maintainability.`,
    image: projectThree,
    link: "https://ticket-management-web-app.netlify.app/",
  },
  {
    id: 5,
    shortDescription: `A modern,cross-platform todo application built with React Native,
              Expo, and Convex for real-time synchronization.`,
    description: `A cross-platform todo app built with React Native and Expo,
     targeting iOS and Android from a shared codebase. Convex powers the backend,
      enabling real-time synchronization of tasks across devices and sessions.
       Expo's managed workflow streamlined development and deployment without
        native build overhead. State updates propagate through subscriptions
         rather than traditional polling. The mobile-first design prioritizes
          touch interactions and platform-consistent navigation.`,
    image: projectFour,
    link: undefined,
  },
];

// Chakra components wrapped with motion() so they accept
// initial/animate/whileHover/whileTap props directly.
const MotionIconButton = motion.create(IconButton);
const MotionImage = motion.create(Image);

const ProjectsPage = () => {
  return (
    <section
      className="
        min-h-screen w-full bg-cover bg-center
        px-3 sm:px-6 md:px-10 lg:px-16 xl:px-20
        py-8 sm:py-10 lg:py-16
        flex flex-col items-center gap-8 sm:gap-10 lg:gap-12"
      style={{ backgroundImage: `url(${bioBg})` }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4, ease: "easeIn" }}
        className="mt-10 max-sm:mt-20 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-[#C0DC6E]"
      >
        Projects
      </motion.h1>

      {/* This wrapper absorbs the remaining height and centers the
          carousel within it, independently of the h1 above. */}
      <motion.div
        className="w-full flex-1 flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4, ease: "easeIn" }}
      >
        <ChakraProvider value={system}>
          <Carousel.Root
            slideCount={PROJECTS_DATA.length}
            w="full"
            maxW={{ base: "full", md: "3xl", lg: "6xl" }}
            mx="auto"
            gap="4"
            allowMouseDrag={false}
          >
            <Carousel.Control justifyContent="center" gap="4" width="full">
              <Carousel.PrevTrigger asChild>
                <MotionIconButton
                  size={{ base: "xs", md: "sm" }}
                  variant="outline"
                  aria-label="Previous project"
                  color="gray.contrast"
                  whileHover={{ scale: 1.12}}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                >
                  <ChevronLeft />
                </MotionIconButton>
              </Carousel.PrevTrigger>

              <Carousel.ItemGroup width="full">
                {PROJECTS_DATA.map((project, index) => (
                  <Carousel.Item key={project.id} index={index}>
                    <Grid
                      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                      gap={{ base: 4, sm: 6, md: 10 }}
                      alignItems="center"
                      w="full"
                    >
                      <GridItem
                        order={{ base: 1, md: index % 2 === 0 ? 1 : 2 }}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MotionImage
                            src={project.image}
                            alt={`Project ${project.id}`}
                            w="full"
                            maxWidth="full"
                            aspectRatio={{ md: "auto" }}
                            objectFit="cover"
                            borderRadius="md"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1.03, opacity: 1 }}
                            viewport={{ amount: 0.1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                           
                          />
                        </a>
                      </GridItem>

                      <GridItem
                        order={{ base: 2, md: index % 2 === 0 ? 2 : 1 }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                          
                          }}
                        >
                          {/* Short version: shown only below md */}
                          <Text
                            hideFrom="md"
                            color="gray.contrast"
                            fontSize={{ base: "sm", sm: "md" }}
                            height="auto"
                          >
                            {project.shortDescription}
                          </Text>

                          {/* Full version: shown from md up */}
                          <Text
                            hideBelow="md"
                            color="gray.contrast"
                            fontSize="lg"
                            height="auto"
                            letterSpacing="0.025em"
                            lineHeight="2rem"
                          >
                            {project.description}
                          </Text>
                        </motion.div>
                      </GridItem>
                    </Grid>
                  </Carousel.Item>
                ))}
              </Carousel.ItemGroup>

              <Carousel.NextTrigger asChild>
                <MotionIconButton
                  size={{ base: "xs", md: "sm" }}
                  variant="outline"
                  aria-label="Next project"
                  color="gray.contrast"
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                >
                  <ChevronRight />
                </MotionIconButton>
              </Carousel.NextTrigger>
            </Carousel.Control>

            <Carousel.IndicatorGroup
              justifyContent="center"
              gap={{ base: 2, md: 3 }}
              marginTop="5"
              flexWrap="wrap"
            >
              {PROJECTS_DATA.map((project, index) => (
                <Carousel.Indicator
                  key={project.id}
                  index={index}
                  unstyled
                  _current={{
                    outline: "2px solid currentColor",
                    outlineOffset: "2px",
                  }}
                >
                  <MotionImage
                    w={{ base: "12", md: "20" }}
                    aspectRatio="16/9"
                    src={project.image}
                    alt={`Project ${project.id} thumbnail`}
                    objectFit="cover"
                    borderRadius="sm"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  />
                </Carousel.Indicator>
              ))}
            </Carousel.IndicatorGroup>
          </Carousel.Root>
        </ChakraProvider>
      </motion.div>
    </section>
  );
};

export default ProjectsPage;
