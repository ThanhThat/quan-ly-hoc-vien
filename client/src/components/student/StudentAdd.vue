<script setup>
import { ref } from 'vue'

let studentAddModal = ref(null)

function showModal() {
  studentAddModal.value.show()
}
</script>

<template>
  <section>
    <button class="btn btn-primary" @click="showModal">Thêm học viên</button>
    <modal-base title="Thêm học viên" ref="studentAddModal">
      <template #body>
        <div class="form-add-student">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="name" name="name" placeholder="Họ và tên" />
            <label for="name">Họ và tên</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="cccd"
              name="cccd"
              placeholder="Số căn cước công dân"
            />
            <label for="cccd">Số căn cước công dân</label>
          </div>
          <div class="form-floating mb-3">
            <input type="date" class="form-control" id="dob" name="dob" placeholder="Năm sinh" />
            <label for="dob">Năm sinh</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="address"
              name="address"
              placeholder="Địa chỉ"
            />
            <label for="address">Địa chỉ</label>
          </div>

          <upload-image-base id="avatar" label="Ảnh Đại diện"></upload-image-base>

          <upload-image-base id="idCardFront" label="Căn cước mặt trước"></upload-image-base>

          <upload-image-base id="idCardBack" label="Căn cước mặt sau"></upload-image-base>
        </div>
      </template>
      <template #footer>
        <button class="btn btn-primary">Thêm học viên</button>
      </template>
    </modal-base>
  </section>
</template>
