<script setup lang="ts">
const posts = [
  // Existing posts
  {
    id: 1,
    title: "How to Manage Your Time and Get More Done",
    image: "_nuxt/assets/images/anime_1.jpeg",
    date: "06 May",
    meeting: {
      day: "Monday",
      hour: "14:00",
      platform: " Zoom Meeting",
    },
    description:
      "Join us for a practical workshop on time management techniques and learn how to boost your productivity. Discover effective strategies to prioritize tasks, avoid distractions, and achieve your goals efficiently.",
    user: {
      image: "_nuxt/assets/images/male_2.jpeg",
      name: "John Doe",
      position: "Manager at Paypal",
    },
    participants: 10,
    likes: 5,
    shares: 2,
  },
  {
    id: 2,
    title: "How to Learn Anything for Creatives and Self-Learners",
    image: "_nuxt/assets/images/female_2.jpeg",
    date: "19 May",
    meeting: {
      day: "Tuesday",
      hour: "09:30",
      platform: " Google Meet",
    },
    description:
      "Calling all creatives and self-learners! In this interactive session, explore proven techniques to accelerate your learning process. Gain insights on effective learning strategies, harness your creativity, and unlock your full potential.",
    user: {
      image: "_nuxt/assets/images/profile_8.jpeg",
      name: "Jane Smith",
      position: "Team Lead at Microsoft",
    },
    participants: 8,
    likes: 3,
    shares: 1,
  },
  // Two new posts
  {
    id: 3,
    title: "Mastering Project Management: Strategies for Success",
    image: "_nuxt/assets/images/profile_7.jpeg",
    date: "31 May",
    meeting: {
      day: "Wednesday",
      hour: "15:00",
      platform: " Microsoft Teams",
    },
    description:
      "Are you ready to take your project management skills to the next level? Join us for an engaging discussion on proven strategies and best practices. Learn from industry experts, explore real-world case studies, and enhance your ability to deliver successful projects.",
    user: {
      image: "_nuxt/assets/images/male_1.jpeg",
      name: "Michael Johnson",
      position: "Project Manager at eTech",
    },
    participants: 12,
    likes: 6,
    shares: 3,
  },
  {
    id: 4,
    title: "Unleashing Creativity: A Workshop for Artists and Innovators",
    image: "_nuxt/assets/images/anime_2.jpeg",
    date: "02 June",
    meeting: {
      day: "Thursday",
      hour: "11:00",
      platform: " Zoom Meeting",
    },
    description:
      "Calling all artists, innovators, and creative minds! Join us for an immersive workshop where we will dive deep into techniques that can ignite your creativity. Discover how to overcome creative blocks, find inspiration in unexpected places, and nurture your artistic spirit.",
    user: {
      image: "_nuxt/assets/images/female_2.jpeg",
      name: "Emily Wilson",
      position: "Trainer at Udacidy",
    },
    participants: 20,
    likes: 10,
    shares: 4,
  },
];
</script>

<template>
  <div class="grid grid-cols-12 gap-4 bg-[#f9f9f9]">
    <div class="col-span-3">
      <SocialMediaSideBar />
    </div>
    <div class="col-span-6 mt-3 overflow-clip">
      <div class="w-full flex justify-center">
        <SocialMediaNav />
      </div>
      <SocialMediaStoryList />
      <SocialMediaPostCard
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :date="post.date"
        :title="post.title"
        :image="post.image"
        :meeting="post.meeting"
        :description="post.description"
        :user="post.user"
        :participants="post.participants"
        :likes="post.likes"
        :shares="post.shares"
        class="my-5"
      />
    </div>
    <div class="col-span-3 h-full bg-slate-500">live</div>
  </div>
</template>
