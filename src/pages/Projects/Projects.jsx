import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
} from "@nextui-org/react";

function Projects() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="text-xl">This is a selection of my most cherished projects to date, showcasing my journey and innovations in software development.</p>
      <section
        id="projects-collage"
        className="w-full grid gap-8"
      >
        {/* TRADEVAULT */}
        <Card
          as={Link}
          href="https://tradevault.up.railway.app/"
          target="_blank"
        >
          <CardHeader className="font-semibold text-xl">TradeVault</CardHeader>
          <CardBody>
            <Image
              isZoomed
              src="images/tradevault-landing.webp"
              alt="Picture of TradeVault Landing Page"
            />
            <p className="pt-4 text-zinc-400">
              TradeVault empowers traders to log and analyze their trades with
              AI feedback and real-time stock news, creating a comprehensive
              trading journal.
            </p>
          </CardBody>
          <CardFooter className="flex gap-2">
            <img width={25} src="icons/react.png" />
            <img width={25} src="icons/nodejs.png" />
            <img width={25} src="icons/javascript.png" />
            <img width={25} src="icons/tailwind.png" />
          </CardFooter>

          {/* NOURISH */}
        </Card>

        <Card
          as={Link}
          href="https://nourish.up.railway.app/"
          target="_blank"
        >
          <CardHeader className="font-semibold text-xl">Nourish</CardHeader>
          <CardBody>
            <Image
              isZoomed
              src="images/nourish-landing.webp"
              alt="Picture of Nourish Landing Page"
            />
            <p className="pt-4 text-zinc-400">
              Streamlining food accessibility in Philadelphia, Nourish connects
              users with local community fridges and pantries through an
              easy-to-use map and community board.
            </p>
          </CardBody>
          <CardFooter className="flex gap-2">
            <img width={25} src="icons/react.png" />
            <img width={25} src="icons/nodejs.png" />
            <img width={25} src="icons/javascript.png" />
            <img width={25} src="icons/tailwind.png" />
          </CardFooter>
        </Card>
        <Card
          as={Link}
          href="https://studysync.up.railway.app/"
          target="_blank"
        >
          <CardHeader className="font-semibold text-xl">StudySync</CardHeader>
          <CardBody>
            <Image
              isZoomed
              src="images/studysync-landing.webp"
              alt="Picture of StudySync Landing Page"
            />
            <p className="pt-4 text-zinc-400">
              An app allowing users to effortlessly view, create, edit, and
              delete study notes for organized and efficient academic tracking.
            </p>
          </CardBody>
          <CardFooter className="flex gap-2">
            <img width={25} src="icons/react.png" />
            <img width={25} src="icons/nodejs.png" />
            <img width={25} src="icons/javascript.png" />
            <img width={25} src="icons/tailwind.png" />
          </CardFooter>
        </Card>
        <Card
          as={Link}
          href="https://lgmixedmartialarts.netlify.app/"
          target="_blank"
        >
          <CardHeader className="font-semibold text-xl">
            Level Ground
          </CardHeader>
          <CardBody>
            <Image
              isZoomed
              src="images/lg-landing.webp"
              alt="Picture of Level Ground Landing Page"
            />
            <p className="pt-4 text-zinc-400">
              A website for a mixed martial arts gym in Massachussetts.
            </p>
          </CardBody>
          <CardFooter className="flex gap-2">
            <img width={25} src="icons/html5.png" />
            <img width={25} src="icons/css3.png" />
          </CardFooter>
        </Card>
      </section>
    </>
  );
}

export default Projects;
