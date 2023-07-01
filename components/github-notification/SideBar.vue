<template>
  <div class="p-3">
    <ul>
      <li class="py-2 px-4 bg-blue-500 rounded-lg text-white text-xs">
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta"
          target="blank"
          ><div class="flex items-center capitalize">
            <svg class="fill-current h-4 w-4 mr-2" viewBox="0 0 16 16">
              <path
                d="M2.8 2.06A1.75 1.75 0 014.41 1h7.18c.7 0 1.333.417
                1.61 1.06l2.74 6.395a.75.75 0 01.06.295v4.5A1.75 1.75
                0 0114.25 15H1.75A1.75 1.75 0 010 13.25v-4.5a.75.75 0
                01.06-.295L2.8 2.06zm1.61.44a.25.25 0
                00-.23.152L1.887 8H4.75a.75.75 0 01.6.3L6.625
                10h2.75l1.275-1.7a.75.75 0 01.6-.3h2.863L11.82
                2.652a.25.25 0 00-.23-.152H4.41zm10.09
                7h-2.875l-1.275 1.7a.75.75 0 01-.6.3h-3.5a.75.75 0
                01-.6-.3L4.375 9.5H1.5v3.75c0
                .138.112.25.25.25h12.5a.25.25 0 00.25-.25V9.5z"
              ></path>
            </svg>
            <span>inbox</span>
          </div>
          <span>22</span></a
        >
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=is%3Asaved"
          target="blank"
          ><div class="flex items-center capitalize">
            <svg class="fill-current h-4 w-4 mr-2" viewBox="0 0 16 16">
              <path
                d="M4.75 2.5a.25.25 0
                00-.25.25v9.91l3.023-2.489a.75.75 0 01.954 0l3.023
                2.49V2.75a.25.25 0 00-.25-.25h-6.5zM3 2.75C3 1.784
                3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75
                1.75v11.5a.75.75 0 01-1.227.579L8 11.722l-3.773
                3.107A.75.75 0 013 14.25V2.75z"
              ></path>
            </svg>
            <span>saved</span>
          </div></a
        >
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=is%3Adone"
          target="blank"
          ><div class="flex items-center capitalize">
            <svg class="fill-current h-4 w-4 mr-2" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0
                01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6
                10.94l6.72-6.72a.75.75 0 011.06 0z"
              ></path>
            </svg>
            <span>Done</span>
          </div>
        </a>
      </li>
    </ul>
    <hr class="my-4" />
    <ul>
      <li
        class="py-2 pl-2 pr-1 flex items-center justify-between font-semibold text-xs capitalize"
      >
        <span class="text-gray-700">filters</span>
        <button>
          <svg
            class="h-4 w-4 hover:text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0
                2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33
                1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0
                1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
                0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
                0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
                0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0
                0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1
                0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
                1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0
                1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
                1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
                2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0
                1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0
                0-1.51 1z"
            ></path>
          </svg>
        </button>
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=reason%3Aassign"
          target="blank"
          ><div class="flex capitalize"><span>🎯 Assigned</span></div>
          <span></span
        ></a>
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=reason%3Aparticipating"
          target="blank"
          ><div class="flex capitalize"><span>💬 Participating</span></div>
          <span>1</span></a
        >
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=reason%3Amention"
          target="blank"
          ><div class="flex capitalize"><span>✋ Mentioned</span></div>
          <span></span
        ></a>
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=reason%3Ateam-mention"
          target="blank"
          ><div class="flex capitalize"><span>🙌 Team mentioned</span></div>
          <span></span
        ></a>
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=reason%3Areview-requested"
          target="blank"
          ><div class="flex capitalize"><span>👀 Review requested</span></div>
          <span></span
        ></a>
      </li>
    </ul>
    <hr class="my-4" />
    <ul>
      <li
        class="py-2 pl-2 pr-1 flex items-center justify-between font-semibold text-xs capitalize"
      >
        <span class="text-gray-700">repositories</span>
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=repo%3Apython%2Fmypy"
          target="blank"
          ><div class="flex items-center capitalize">
            <img
              class="h-4 w-4 mr-2 rounded-full"
              alt="@python"
              src="https://avatars1.githubusercontent.com/u/1525981?s=60&amp;v=4"
            />
            <span class="w-32 truncate">python/mypy</span>
          </div>
          <span>5</span></a
        >
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=repo%3Asveltejs%2Fsvelte"
          target="blank"
          ><div class="flex items-center capitalize">
            <img
              class="h-4 w-4 mr-2 rounded-full"
              alt="@sveltejs"
              src="https://avatars2.githubusercontent.com/u/23617963?s=60&amp;v=4"
            />
            <span class="w-32 truncate">sveltejs/svelte</span>
          </div>
          <span>5</span></a
        >
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=repo%3Apython-poetry%2Fpoetry"
          target="blank"
          ><div class="flex items-center capitalize">
            <img
              class="h-4 w-4 mr-2 rounded-full"
              alt="@python-poetry"
              src="https://avatars0.githubusercontent.com/u/48722593?s=60&amp;v=4"
            />
            <span class="w-32 truncate">python-poetry/poetry</span>
          </div>
          <span>4</span></a
        >
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=repo%3Aencode%2Fstarlette"
          target="blank"
          ><div class="flex items-center capitalize">
            <img
              class="h-4 w-4 mr-2 rounded-full"
              alt="@encode"
              src="https://avatars3.githubusercontent.com/u/19159390?s=60&amp;v=4"
            />
            <span class="w-32 truncate">encode/starlette</span>
          </div>
          <span>2</span></a
        >
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=repo%3Adjango%2Fdjango-contrib-comments"
          target="blank"
          ><div class="flex items-center capitalize">
            <img
              class="h-4 w-4 mr-2 rounded-full"
              alt="@django"
              src="https://avatars3.githubusercontent.com/u/27804?s=60&amp;v=4"
            />
            <span class="w-32 truncate">django/django-contrib-comments</span>
          </div>
          <span>1</span></a
        >
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=repo%3Acookiecutter%2Fcookiecutter"
          target="blank"
          ><div class="flex items-center capitalize">
            <img
              class="h-4 w-4 mr-2 rounded-full"
              alt="@cookiecutter"
              src="https://avatars1.githubusercontent.com/u/12502901?s=60&amp;v=4"
            />
            <span class="w-32 truncate">cookiecutter/cookiecutter</span>
          </div>
          <span>1</span></a
        >
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/notifications/beta?query=repo%3Apsf%2Fblack"
          target="blank"
          ><div class="flex items-center capitalize">
            <img
              class="h-4 w-4 mr-2 rounded-full"
              alt="@psf"
              src="https://avatars1.githubusercontent.com/u/50630501?s=60&amp;v=4"
            />
            <span class="w-32 truncate">psf/black</span>
          </div>
          <span>1</span></a
        >
      </li>
      <li
        class="mt-1 py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-600 text-sm"
      >
        <a
          class="flex items-center justify-between"
          href="https://github.com/ZackNew/uiCollections"
          target="blank"
          ><div class="flex items-center capitalize">
            <img
              class="h-4 w-4 mr-2 rounded-full"
              alt="@ZackNew"
              src="https://avatars.githubusercontent.com/u/100416218?v=4"
            />
            <span class="w-32 truncate">ZackNew/uiCollections</span>
          </div>
          <span>1</span></a
        >
      </li>
    </ul>
    <hr class="my-4" />
    <button
      class="pl-2 pr-1 flex items-center font-semibold text-xs text-gray-600 hover:text-blue-500 hover:underline capitalize"
    >
      <span>manage notifications</span>
      <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path d="M7 10l5 5 5-5H7z"></path>
      </svg>
    </button>
  </div>
</template>
