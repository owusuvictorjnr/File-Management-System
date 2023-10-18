import mongoose, { Schema, models } from 'mongoose'

const fileUploadInfo = new Schema(
  {
    projecTitle: {
      type: String,
      required: true,
    },

    studentName: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    indexNumber: {
      type: String,
      required: true,
    },

    deptHead: {
      type: String,
      required: true,
    },

    supervisor: {
      type: String,
      required: true,
    },

    file: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const FileUploadInfo =
  models.FileUploadInfo || mongoose.model('FileUploadInfo', fileUploadInfo)

export default FileUploadInfo
