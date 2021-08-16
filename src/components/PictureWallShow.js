import React from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class PicturesWallShow extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    images: this.props.images,
    fileList: [],
  };

  componentDidMount() {
    this.handleImages();
  }

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
  handleCancel = () => this.setState({ previewVisible: false });

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

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;

    return (
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          // iconRenderer={() => {}}
          // onChange={this.handleChange}
        >
          {/* {fileList.length >= 8 ? null : uploadButton} */}
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
    );
  }
}
export default PicturesWallShow;
