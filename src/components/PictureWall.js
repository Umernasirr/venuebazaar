import React from "react";
import { Upload, Modal } from "antd";
import { AiOutlinePlus } from "react-icons/all";
import { service } from "../services/services";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
    images: this.props.images,
    id: this.props.id,
  };

  // componentDidMount
  componentDidMount() {
    this.handleImages();
    this.setState({
      id: this.props.id,
    });
  }
  handleCancel = () => this.setState({ previewVisible: false });

  handleImages = () => {
    const imageToUplaod = this.state.images.map((image, index) => {
      return {
        uid: index,
        name: index + ".png",
        url: image,
        status: "done",
      };
    });
    this.setState({ fileList: imageToUplaod });
  };
  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  handleUpload = (file) => {
    const formData = new FormData();
    formData.append("media", file);
    service
      .addImageToVenue(this.state.id, formData)
      .then(({ data }) => {
        if (data.success) {
          this.setState({
            images: data.data.images,
          });
          this.props.setImageChange(data.data.images);
          this.handleImages();
        }
      })
      .catch((err) => console.log(err));
  };
  handleRemove = (file) => {
    service
      .removeImageToVenue(this.state.id, { url: file.url })
      .then(({ data }) => {
        if (data.success) {
          this.setState({
            images: data.data.images,
          });
          this.props.setImageChange(data.data.images);
          this.handleImages();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <AiOutlinePlus />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      this.state.fileList &&
      this.state.fileList.length > 0 &&
      this.state.id && (
        <>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onRemove={this.handleRemove}
            beforeUpload={this.handleUpload}
          >
            {fileList.length >= 10 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </>
      )
    );
  }
}

export default PicturesWall;
