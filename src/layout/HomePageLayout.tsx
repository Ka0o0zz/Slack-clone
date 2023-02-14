import { Header, AnchorButton } from "@components/index";

export const HomePageLayout = () => {
  return (
    <main className="w-10/12 h-screen m-auto bg-fuchsia-900 grid place-content-center">
      <Header />
      <div className="grid grid-cols-2">
        <header className="text-left">
          <h1 className="text-white text-6xl font-extrabold tracking-tighter mb-4">
            Great teamwork starts with a{" "}
            <span className="text-amber-500">digital HQ</span>
          </h1>
          <p className="text-2xl text-white font-extralight mb-10">
            With all your people, tools and communication in one place, you can
            work faster and more flexibly than ever before.
          </p>

          <div>
            <AnchorButton
              href="/auth/register"
              widthFull
              className="buttons principal mb-4"
            >
              Sing up with email
            </AnchorButton>
            <AnchorButton
              href="/auth/register"
              widthFull
              className="buttons second"
            >
              Sing in with email
            </AnchorButton>
          </div>

          <p className="text-2xl text-white mt-5">
            Slack is free to try for as long as you’d like
          </p>
        </header>
        <section className="grid place-content-center p-2">
          <video autoPlay loop className="rounded-r-2xl">
            <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm" />
          </video>
        </section>
      </div>
    </main>
  );
};
