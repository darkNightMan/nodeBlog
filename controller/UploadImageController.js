
class UploadImageController {
  uploadImage (req, res) {
    res.R.ok({path:`public/uploads/${req.file.filename}`})
  }
}
module.exports = new UploadImageController()