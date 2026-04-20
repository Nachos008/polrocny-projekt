<template>
  <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-950 px-4 py-10 text-text-100">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_30%),linear-gradient(135deg,rgba(8,12,20,1),rgba(5,8,14,1))]"></div>
    <div class="absolute right-10 top-10 h-44 w-44 rounded-full bg-accent-500/10 blur-3xl"></div>
    <div class="absolute bottom-12 left-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"></div>

    <div class="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-border-800 bg-panel-900/80 shadow-[0_0_60px_rgba(34,197,94,0.12)] lg:grid-cols-[0.95fr_1.05fr]">
      <section class="order-2 flex items-center p-8 lg:order-1 lg:p-10">
        <div class="w-full">
          <div class="mb-8">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              GameVault
            </div>
            <h1 class="text-3xl font-bold text-text-100">Create your account</h1>
            <p class="mt-2 text-sm text-text-400">Set up your profile and start tracking your games.</p>
          </div>

          <form class="space-y-4">
            <div class="grid gap-4 sm:grid-cols-2">
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-text-300">First name</span>
                <input type="text" placeholder="Patrik" class="w-full rounded-xl border border-border-800 bg-bg-950/60 px-4 py-3 text-text-100 outline-none transition-colors focus:border-accent-500" />
              </label>
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-text-300">Last name</span>
                <input type="text" placeholder="Novak" class="w-full rounded-xl border border-border-800 bg-bg-950/60 px-4 py-3 text-text-100 outline-none transition-colors focus:border-accent-500" />
              </label>
            </div>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-text-300">Email</span>
              <input type="email" placeholder="you@example.com" class="w-full rounded-xl border border-border-800 bg-bg-950/60 px-4 py-3 text-text-100 outline-none transition-colors focus:border-accent-500" />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-text-300">Password</span>
              <input type="password" placeholder="Create a password" class="w-full rounded-xl border border-border-800 bg-bg-950/60 px-4 py-3 text-text-100 outline-none transition-colors focus:border-accent-500" />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-text-300">Confirm password</span>
              <input type="password" placeholder="Repeat your password" class="w-full rounded-xl border border-border-800 bg-bg-950/60 px-4 py-3 text-text-100 outline-none transition-colors focus:border-accent-500" />
            </label>

            <div class="flex items-start gap-3 text-sm text-text-400">
              <input type="checkbox" class="mt-1 rounded border-border-700 bg-bg-950 text-accent-500" />
              <p>I agree to the terms and want to receive game updates and news.</p>
            </div>

            <button type="button" class="w-full rounded-xl bg-accent-500 px-4 py-3 font-bold text-bg-950 transition-colors hover:bg-accent-400">
              Create account
            </button>

            <p class="text-center text-sm text-text-400">
              Already have an account?
              <RouterLink to="/login" class="font-semibold text-accent-300 hover:text-accent-200">Sign in</RouterLink>
            </p>
          </form>
        </div>
      </section>

      <section class="order-1 border-b border-border-800/80 p-8 lg:order-2 lg:border-b-0 lg:border-l lg:p-10">
        <div class="flex h-full flex-col justify-between">
          <div>
            <h2 class="max-w-md text-4xl font-black leading-tight text-text-100 md:text-5xl">
              Join the game hub built for your collection.
            </h2>
            <p class="mt-4 max-w-lg text-sm leading-6 text-text-300 md:text-base">
              Keep your library, activity, and friends in one place with a clean dashboard.
            </p>
          </div>

          <div class="mt-10 grid gap-3 sm:grid-cols-2">
            <div class="rounded-2xl border border-border-800 bg-bg-950/45 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-text-500">Profile</p>
              <p class="mt-2 text-lg font-bold text-text-100">Custom identity</p>
            </div>
            <div class="rounded-2xl border border-border-800 bg-bg-950/45 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-text-500">Progress</p>
              <p class="mt-2 text-lg font-bold text-text-100">Recent activity</p>
            </div>
            <div class="rounded-2xl border border-border-800 bg-bg-950/45 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-text-500">Friends</p>
              <p class="mt-2 text-lg font-bold text-text-100">Live presence</p>
            </div>
            <div class="rounded-2xl border border-border-800 bg-bg-950/45 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-text-500">Library</p>
              <p class="mt-2 text-lg font-bold text-text-100">All in one place</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>