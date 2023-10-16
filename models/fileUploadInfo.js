import mongoose, { Schema, models } from 'mongoose'

const fileUploadInfo = new Schema(
  {
    project_tile: {
      type: String,
      required: true,
    },

    student_name: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    index_number: {
      type: String,
      required: true,
    },

    supervisor: {
      type: String,
      required: true,
    },

    head_of_dept: {
      type: String,
      required: true,
    },

    calendar: {
      type: String,
      required: true,
    },

    file_type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const FileUploadInfo =
  models.FileUploadInfo || mongoose.model('FileUploadInfo', fileUploadInfo)
export default FileUploadInfo
