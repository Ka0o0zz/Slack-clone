import { Button, Divider, Input } from "@components/index";
import { AuthLayout } from "@layout/index";

export default function Login() {
  return (
    <AuthLayout
      h1="Sign in to Slack"
      p={
        <p className="text-slate-900 text-lg leading-7 mb-8 text-center max-w-2xl">
          We suggest using the <strong>email address you use at work.</strong>
        </p>
      }
      href="/auth/register"
      pRecording="New to slack?"
      linkText="Create an account"
    >
      <form className="w-96">
        <Button
          text="Sign In With Google"
          src="/assets/googleIcon.svg"
          alt="google icon"
          className="text-sky-600 border-sky-600 mb-4"
        />

        <Button
          text="Sign In With Google"
          src="/assets/githubIcon.svg"
          alt="github icon"
          className="text-slate-900 border-slate-900"
        />

        <Divider text="OR" />

        <Input
          type="email"
          name="email"
          placeholder="name@slack.com"
          className="mb-4"
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          className="mb-4"
        />

        <Button
          text="Sign In With Email"
          className="text-white bg-fuchsia-900 border-none"
          type="submit"
        />
      </form>
    </AuthLayout>
  );
}
