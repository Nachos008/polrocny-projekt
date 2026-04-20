<template>
  <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-950 px-4 py-10 text-text-100">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%),linear-gradient(135deg,rgba(8,12,20,1),rgba(5,8,14,1))]"></div>
    <div class="absolute left-12 top-12 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl"></div>
    <div class="absolute bottom-10 right-12 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"></div>

    <div class="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-border-800 bg-panel-900/80 shadow-[0_0_60px_rgba(34,197,94,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
      <section class="flex flex-col justify-between border-b border-border-800/80 p-8 lg:border-b-0 lg:border-r lg:p-10">
        <div>
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            GameVault
          </div>

          <h1 class="max-w-md text-4xl font-black leading-tight text-text-100 md:text-5xl">
            Jump back into your library.
          </h1>
          <p class="mt-4 max-w-lg text-sm leading-6 text-text-300 md:text-base">
            Sign in to track your games, friends, activity, and progress in one place.
          </p>

          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            <div class="rounded-2xl border border-border-800 bg-bg-950/45 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-text-500">Library</p>
              <p class="mt-2 text-lg font-bold text-text-100">Fast access</p>
            </div>
            <div class="rounded-2xl border border-border-800 bg-bg-950/45 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-text-500">Friends</p>
              <p class="mt-2 text-lg font-bold text-text-100">Live status</p>
            </div>
            <div class="rounded-2xl border border-border-800 bg-bg-950/45 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-text-500">Activity</p>
              <p class="mt-2 text-lg font-bold text-text-100">Recent play</p>
            </div>
          </div>
        </div>

        <div class="mt-10 rounded-2xl border border-border-800 bg-bg-950/45 p-4">
          <p class="text-sm text-text-400">Featured now</p>
          <div class="mt-3 flex items-center gap-4">
            <img src="https://placehold.co/120x72/1a1a2e/84cc16?text=ARC" alt="Featured game" class="h-18 w-30 rounded-xl object-cover" />
            <div>
              <p class="text-lg font-semibold text-text-100">ARC Raiders</p>
              <p class="text-sm text-text-400">Last played today</p>
            </div>
          </div>
        </div>
      </section>

      <section class="flex items-center p-8 lg:p-10">
        <div class="w-full">
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-text-100">Sign in</h2>
            <p class="mt-2 text-sm text-text-400">Welcome back. Continue where you left off.</p>
          </div>

          <form class="space-y-4">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-text-300">Email</span>
              <input type="email" placeholder="you@example.com" class="w-full rounded-xl border border-border-800 bg-bg-950/60 px-4 py-3 text-text-100 outline-none transition-colors focus:border-accent-500" />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-text-300">Password</span>
              <input type="password" placeholder="••••••••" class="w-full rounded-xl border border-border-800 bg-bg-950/60 px-4 py-3 text-text-100 outline-none transition-colors focus:border-accent-500" />
            </label>

            <div class="flex items-center justify-between text-sm text-text-400">
              <label class="flex items-center gap-2">
                <input type="checkbox" class="rounded border-border-700 bg-bg-950 text-accent-500" />
                Remember me
              </label>
              <button type="button" class="text-accent-300 transition-colors hover:text-accent-200">Forgot password?</button>
            </div>

            <button type="button" class="w-full rounded-xl bg-accent-500 px-4 py-3 font-bold text-bg-950 transition-colors hover:bg-accent-400">
              Sign in
            </button>

            <p class="text-center text-sm text-text-400">
              New here?
              <RouterLink to="/register" class="font-semibold text-accent-300 hover:text-accent-200">Create an account</RouterLink>
            </p>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>