/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lc0mB65ufdQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import {Card} from "~/components/ui/card"
import {Input} from "~/components/ui/input"
import {Button} from "~/components/ui/button"
import {type SVGProps} from "react";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">

      <main className="flex-1 ">
        <section className="w-full pt-12 md:py-40 lg:py-48 border-y flex items-center justify-center top-section" >
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Take Control of Your Fitness Journey
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Unlock your full potential with our powerful gym progress tracking app. Effortlessly monitor your
                  workouts, visualize your progress, and connect with a supportive community.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Hero"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-t-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Fitness Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our gym progress tracking app offers a comprehensive suite of tools to help you achieve your fitness
                  goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <ClipboardIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Workout Tracking</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Log your workouts, set goals, and track your progress with our intuitive workout tracking features.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-secondary p-2 text-secondary-foreground">
                    <GitGraphIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Progress Visualization</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Visualize your progress with detailed charts and graphs, helping you stay motivated and on track.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-muted p-2 text-muted-foreground">
                    <UsersIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Social Features</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Connect with a supportive community of fitness enthusiasts, share your progress, and get inspired.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-accent p-2 text-accent-foreground">
                    <CalendarIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Workout Scheduling</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Plan and schedule your workouts with ease, ensuring you stay consistent and on top of your fitness
                  routine.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-success p-2 text-success-foreground">
                    <NutIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Nutrition Tracking</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Monitor your nutrition intake, set dietary goals, and receive personalized recommendations to support
                  your fitness goals.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-warning p-2 text-warning-foreground">
                    <AlarmClockIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Reminders and Alerts</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Stay on top of your fitness routine with customizable reminders and alerts, ensuring you never miss a
                  workout or important milestone.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from real people who have transformed their fitness with our app.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-background shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Fitness Enthusiast</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "This app has been a game-changer for my fitness journey. The workout tracking and progress
                  visualization features have kept me motivated and on track to reach my goals."
                </p>
              </Card>
              <Card className="p-6 bg-background shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-secondary p-2 text-secondary-foreground">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Michael Lee</h4>
                    <p className="text-sm text-muted-foreground">Bodybuilder</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "I've been using this app for over a year, and it has completely transformed my fitness routine. The
                  social features have helped me connect with a supportive community and stay motivated."
                </p>
              </Card>
              <Card className="p-6 bg-background shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-success p-2 text-success-foreground">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Emily Nguyen</h4>
                    <p className="text-sm text-muted-foreground">Yoga Instructor</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "As a yoga instructor, I\'ve been using this app to track my own progress and share my journey with my
                  students. The app\'s features have been invaluable in helping me stay motivated and accountable."
                </p>
              </Card>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to get notified when we launch.{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Affordable Plans for Every Fitness Level
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your needs and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card className="p-6 bg-background shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Basic</h3>
                    <div className="text-4xl font-bold">$9</div>
                  </div>
                  <p className="text-muted-foreground">Perfect for beginners or those on a budget.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-success" />
                      Workout Tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-success" />
                      Progress Visualization
                    </li>
                    <li className="flex items-center gap-2">
                      <XIcon className="h-4 w-4 text-danger" />
                      Social Features
                    </li>
                    <li className="flex items-center gap-2">
                      <XIcon className="h-4 w-4 text-danger" />
                      Workout Scheduling
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </div>
              </Card>
              <Card className="p-6 bg-background shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Premium</h3>
                    <div className="text-4xl font-bold">$19</div>
                  </div>
                  <p className="text-muted-foreground">Unlock advanced features for serious fitness enthusiasts.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-success" />
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function AlarmClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function NutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4V2" />
      <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" />
      <path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props: SVGProps<SVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}   