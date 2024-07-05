import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto max-w-2xl py-12 md:py-24 lg:py-32">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Latest news here.{" "}
            <a href="#" className="font-semibold text-blue-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Explore the brilliant Leo Clubs
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2">
            <Button size="lg" className="flex-1 sm:flex-initial">
              <Link href="/#clubs">View Clubs</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 sm:flex-initial"
            >
              <Link href="/about">
                About Us <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-muted" id="clubs">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Clubs</h2>
            <p className="text-gray-600 mt-4">
              Learn more about the clubs and what it entails.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-8 gap-2">
            <Card>
              <Image
                src="/logo.png"
                width={400}
                height={400}
                alt="test"
                className="object-cover w-full h-[250px]"
              />
              <CardContent>
                <h2 className="mt-4 font-bold text-xl">Club Name</h2>
                <p className="text-muted-foreground mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eligendi, magni?
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src="/logo.png"
                width={400}
                height={400}
                alt="test"
                className="object-cover w-full h-[250px]"
              />
              <CardContent>
                <h2 className="mt-4 font-bold text-xl">Club Name</h2>
                <p className="text-muted-foreground mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eligendi, magni?
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src="/logo.png"
                width={400}
                height={400}
                alt="test"
                className="object-cover w-full h-[250px]"
              />
              <CardContent>
                <h2 className="mt-4 font-bold text-xl">Club Name</h2>
                <p className="text-muted-foreground mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eligendi, magni?
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src="/logo.png"
                width={400}
                height={400}
                alt="test"
                className="object-cover w-full h-[250px]"
              />
              <CardContent>
                <h2 className="mt-4 font-bold text-xl">Club Name</h2>
                <p className="text-muted-foreground mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eligendi, magni?
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                District President Message
              </h2>
              <p className="text-muted-foreground">For L.Y. 2024/25</p>
              <div>
                <q className="text-muted-foreground mt-2 block space-y-3">
                  <p>Dear Leos,</p>
                  <p>Namaste!</p>
                  <p>
                    I am deeply honored to serve as the District President of
                    Leo District 325 D, Nepal, for the Lionistic Year 2024/25.
                    Our district stands as a testament to the power of youth
                    leadership, unwavering commitment, and the spirit of
                    service. As we step into this new year, I am thrilled to
                    unveil our theme: <strong>&quot;Spark.&quot;</strong>
                  </p>
                  <p>
                    <strong>Spark</strong>—a word that embodies potential,
                    energy, and the beginning of transformation. Just as a
                    single spark can ignite a fire, each of us holds the power
                    to initiate change, inspire others, and light up our
                    communities.
                  </p>
                  <p>
                    A spark is the essence of leadership, the beginning of
                    impactful experience, the gateway to opportunity, and the
                    heart of service. It takes one visionary idea, one
                    courageous action, to lead the way. Our experiences through
                    projects and challenges shape us, providing growth and
                    resilience. Opportunities for personal and professional
                    development are abundant—seize them to illuminate your path
                    to success. Our dedication to serving our communities is the
                    fire that drives us forward, bringing light and hope to
                    those in need.
                  </p>
                  <p>
                    As we embark on this journey together, let us keep the
                    essence of &quot;Spark&quot; alive in everything we do. Let
                    our leadership inspire others, our experiences shape us, our
                    opportunities empower us, and our service brighten the lives
                    of many.
                  </p>
                  <p>
                    To my fellow Leos, embrace this theme with passion and
                    dedication. Your actions, no matter how small, have the
                    potential to ignite great change. To the Lions and community
                    partners, your support and mentorship are the fuel that
                    sustains our sparks. Together, we will achieve remarkable
                    milestones.
                  </p>
                  <p>
                    Ultimately, remember that every significant change begins
                    with a single spark. Let us be the catalysts that lead,
                    inspire, and transform. Together, we will make this
                    Lionistic Year 2024/25 a beacon of hope, progress, and
                    unity.
                  </p>
                  <p>Yours in Service,</p>
                  <div className="space-y-1">
                    <p> Leo Milan Shahi</p>
                    <p>District President</p>
                    <p> Leo District 325 D,</p>
                    <p>Nepal L.Y. 2024/25</p>
                  </div>
                </q>
              </div>
            </div>
          </div>
          <Image
            src="/milan.png"
            width={400}
            height={400}
            alt="John Doe"
            className="mx-auto object-cover w-full"
          />
        </div>
      </section>
    </main>
  );
}
