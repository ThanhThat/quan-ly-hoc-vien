<template>
  <div class="form-group mt-3">
    <input
      type="file"
      accept="image/png, image/jpg, image/jpeg"
      :id="id"
      :name="id"
      v-show="false"
      @change="previewImage"
    />
    <label :for="id" :class="[isAvatar ? 'preview-image-avatar' : 'preview-image-card']"
      ><span v-if="!srcImg">{{ label }}</span>
      <img v-if="srcImg" :src="srcImg" />
    </label>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const srcImg = ref(null)
const isAvatar = ref(false)

const props = defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
  },
})

onMounted(() => {
  if (props.id === 'avatar') isAvatar.value = true
})

function previewImage(e) {
  const input = e.target
  if (input.files.length > 0) {
    const reader = new FileReader()
    reader.onload = (e) => {
      srcImg.value = e.target.result
    }
    reader.readAsDataURL(input.files[0])
  }
}
</script>

<style lang="scss">
.preview-image-avatar {
  width: 4cm;
  height: 5cm;
}

.preview-image-card {
  width: 85.6mm;
  height: 53.98mm;
}
.preview-image-avatar,
.preview-image-card {
  border: 2px dashed #1298c0;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: 500;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
