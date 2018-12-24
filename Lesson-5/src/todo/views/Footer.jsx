import '../../assets/styles/footer.scss';

export default {
  data() {
    return {
      text: 'Written by KokoTa',
    };
  },
  render() {
    return (
      <div class="footer">
        <span>{this.text}</span>
      </div>
    );
  },
};
