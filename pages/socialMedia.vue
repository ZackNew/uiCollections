<script setup lang="ts">
const posts = [
  // Existing posts
  {
    id: 1,
    title: "How to Manage Your Time and Get More Done",
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761247/my-ui-collections-images/post1_w3qela.jpg",
    date: "06 May",
    meeting: {
      day: "Monday",
      hour: "14:00",
      platform: " Zoom Meeting",
    },
    description:
      "Join us for a practical workshop on time management techniques and learn how to boost your productivity. Discover effective strategies to prioritize tasks, avoid distractions, and achieve your goals efficiently.",
    user: {
      image:
        "https://res.cloudinary.com/doouhsdka/image/upload/v1687761247/my-ui-collections-images/male_2_lit8sk.jpg",
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
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761246/my-ui-collections-images/post2_zqnjeh.jpg",
    date: "19 May",
    meeting: {
      day: "Tuesday",
      hour: "09:30",
      platform: " Google Meet",
    },
    description:
      "Calling all creatives and self-learners! In this interactive session, explore proven techniques to accelerate your learning process. Gain insights on effective learning strategies, harness your creativity, and unlock your full potential.",
    user: {
      image:
        "https://res.cloudinary.com/doouhsdka/image/upload/v1687761244/my-ui-collections-images/profile_8_uvzux1.jpg",
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
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761247/my-ui-collections-images/post2_bvzlxk.jpg",
    date: "31 May",
    meeting: {
      day: "Wednesday",
      hour: "15:00",
      platform: " Microsoft Teams",
    },
    description:
      "Are you ready to take your project management skills to the next level? Join us for an engaging discussion on proven strategies and best practices. Learn from industry experts, explore real-world case studies, and enhance your ability to deliver successful projects.",
    user: {
      image:
        "https://res.cloudinary.com/doouhsdka/image/upload/v1687761247/my-ui-collections-images/male_1_nbxblm.jpg",
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
    image:
      "https://res.cloudinary.com/doouhsdka/image/upload/v1687761246/my-ui-collections-images/post4_bbqdhw.png",
    date: "02 June",
    meeting: {
      day: "Thursday",
      hour: "11:00",
      platform: " Zoom Meeting",
    },
    description:
      "Calling all artists, innovators, and creative minds! Join us for an immersive workshop where we will dive deep into techniques that can ignite your creativity. Discover how to overcome creative blocks, find inspiration in unexpected places, and nurture your artistic spirit.",
    user: {
      image:
        "https://res.cloudinary.com/doouhsdka/image/upload/v1687761248/my-ui-collections-images/female_2_yrqwug.jpg",
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
  <div class="grid grid-cols-12 bg-[#f5f5f5] dark:bg-[#17242b]">
    <!-- Left Side -->
    <div class="col-span-3">
      <SocialMediaSideBar />
    </div>
    <!-- Feed -->
    <div class="col-span-6 mt-3 overflow-clip">
      <div class="w-full flex justify-center">
        <SocialMediaNav />
      </div>
      <div class="max-h-[92vh] overflow-auto no-scrollbar px-4">
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
    </div>
    <!-- Live Section -->
    <div class="col-span-3">
      <SocialMediaLiveSection />
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  width: 30px;
  background-color: none;
  width: 7px;
}
.no-scrollbar::-webkit-scrollbar-thumb {
  background-color: #c5c5c5;
  border-radius: 100px;
}
</style>
