import styles from "./BottomLogo.module.css";

export default function BottomLogo() {
  return (
    <div className={styles.bLogoContainer}>
      <svg
        className={`${styles.ddLogoName} ${styles.svg}`}
        id="design-duh-un"
        width="119"
        height="92"
        viewBox="0 0 119 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M78.0104 26.6044V4.03051H83.358V26.6044H78.0104Z"
          fill="white"
        />
        <path d="M78.0104 2.6469V0H83.358V2.6469H78.0104Z" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.8111 26.6194C49.4584 26.7899 50.1804 26.8751 50.9771 26.8751C52.3214 26.8751 53.4418 26.6996 54.338 26.3487C55.2343 25.9978 55.9214 25.4714 56.3994 24.7696C56.8873 24.0578 57.2259 23.2607 57.4151 22.3784C57.6043 21.4961 57.6989 20.4283 57.6989 19.175V17.8967H52.3812C52.4011 17.9769 52.4111 18.4582 52.4111 19.3405C52.4111 19.7916 52.4011 20.1676 52.3812 20.4684C52.3613 20.7692 52.3115 21.1151 52.2318 21.5061C52.1621 21.8871 52.0376 22.1829 51.8584 22.3934C51.6791 22.5939 51.4451 22.6942 51.1563 22.6942C50.8775 22.6942 50.6435 22.629 50.4543 22.4987C50.275 22.3583 50.1455 22.1578 50.0659 21.8971C49.9862 21.6264 49.9314 21.3657 49.9016 21.1151C49.8717 20.8544 49.8568 20.5436 49.8568 20.1826V19.6713C49.8667 19.4407 49.8717 19.2753 49.8717 19.175V16.0168H57.6392C57.679 15.2548 57.6989 13.8561 57.6989 11.8208V10.1816C57.6989 5.91042 55.5479 3.77485 51.2459 3.77485C49.1248 3.77485 47.4717 4.32628 46.2867 5.42916C45.1116 6.52201 44.5241 8.10615 44.5241 10.1816V19.2502C44.5241 19.8117 44.539 20.323 44.5689 20.7842C44.6087 21.2454 44.6834 21.7467 44.7929 22.2881C44.9124 22.8296 45.0668 23.3108 45.256 23.7319C45.4452 24.153 45.6991 24.5691 46.0178 24.9802C46.3464 25.3812 46.7298 25.7171 47.168 25.9878C47.6161 26.2485 48.1638 26.459 48.8111 26.6194ZM50.4841 8.04599C50.6733 7.8956 50.9073 7.8204 51.1862 7.8204C51.9828 7.8204 52.3812 8.63252 52.3812 10.2568V12.6029H49.8717C49.8717 12.3923 49.8667 12.0765 49.8568 11.6554C49.8468 11.2343 49.8418 10.9185 49.8418 10.7079C49.8418 10.2668 49.8568 9.89581 49.8866 9.59503C49.9165 9.28422 49.9763 8.98343 50.0659 8.69268C50.1555 8.40192 50.2949 8.18636 50.4841 8.04599Z"
          fill="white"
        />
        <path
          d="M68.6912 9.91085L68.721 10.7681H74.218V10.347C74.218 8.11116 73.6554 6.45684 72.5301 5.38404C71.4148 4.31124 69.8065 3.77485 67.7053 3.77485C66.5601 3.77485 65.4945 3.97036 64.5087 4.36138C63.5327 4.7524 62.7162 5.36901 62.0589 6.2112C61.4017 7.0534 61.073 8.051 61.073 9.20401C61.073 9.84569 61.0979 10.3721 61.1477 10.7831C61.1975 11.1842 61.3071 11.6404 61.4763 12.1517C61.6556 12.653 61.9344 13.1343 62.3129 13.5955C62.7012 14.0466 63.2041 14.5129 63.8215 14.9941L66.6746 17.2049C67.0928 17.5257 67.4364 17.8315 67.7053 18.1223C67.9841 18.413 68.1933 18.6587 68.3327 18.8592C68.482 19.0597 68.5866 19.2953 68.6464 19.566C68.7161 19.8267 68.7559 20.0272 68.7659 20.1676C68.7758 20.2979 68.7808 20.5135 68.7808 20.8143C68.7808 21.9874 68.4223 22.5739 67.7053 22.5739C67.546 22.5739 67.4016 22.5588 67.2721 22.5288C67.1526 22.4987 67.0182 22.4335 66.8688 22.3333C66.7194 22.233 66.5999 22.0676 66.5103 21.837C66.4306 21.5963 66.3908 21.2955 66.3908 20.9346L66.3609 18.2877H61.0133L60.9834 20.0774C60.9834 24.6092 63.1942 26.8751 67.6157 26.8751C69.687 26.8751 71.3251 26.3237 72.5301 25.2208C73.745 24.1079 74.3525 22.4736 74.3525 20.318C74.3525 19.917 74.3376 19.556 74.3077 19.2352C74.2778 18.9143 74.1882 18.4983 74.0388 17.9869C73.8994 17.4756 73.7052 16.9993 73.4562 16.5582C73.2172 16.107 72.8587 15.6107 72.3807 15.0693C71.9027 14.5279 71.3351 14.0116 70.6779 13.5203L67.3767 11.0839C66.7393 10.6127 66.4207 9.97602 66.4207 9.17393C66.4207 8.79294 66.5153 8.49717 66.7045 8.28662C66.9036 8.07607 67.1875 7.97079 67.5559 7.97079C67.775 7.97079 67.9642 8.03596 68.1236 8.1663C68.2829 8.29664 68.4024 8.4721 68.482 8.69268C68.5617 8.90323 68.6165 9.10876 68.6464 9.30929C68.6762 9.50981 68.6912 9.71033 68.6912 9.91085Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.8242 29.5371C90.7901 29.7877 92.0051 29.913 93.4689 29.913C94.6938 29.913 95.7345 29.7977 96.5909 29.5671C97.4572 29.3466 98.2091 28.9706 98.8464 28.4392C99.4937 27.9078 99.9717 27.1759 100.28 26.2435C100.599 25.311 100.758 24.158 100.758 22.7844V4.04555H95.3062V6.58718C95.1867 6.03574 94.9975 5.56953 94.7386 5.18853C94.4897 4.79751 94.2009 4.50676 93.8722 4.31626C93.5436 4.11574 93.22 3.97537 92.9013 3.89516C92.5826 3.81495 92.244 3.77485 91.8855 3.77485C91.1885 3.77485 90.576 3.87511 90.0482 4.07563C89.5304 4.27615 89.0673 4.60702 88.659 5.06822C88.2507 5.52942 87.942 6.1711 87.7329 6.99324C87.5238 7.80536 87.4192 8.79795 87.4192 9.97101V18.4381C87.4192 19.2302 87.4989 19.9621 87.6582 20.6338C87.8275 21.3056 88.0815 21.9122 88.42 22.4536C88.7586 22.995 89.2217 23.4211 89.8092 23.7319C90.4067 24.0427 91.0988 24.1981 91.8855 24.1981C93.7278 24.1981 94.8681 23.4261 95.3062 21.8821V23.1303C95.3062 24.0728 95.0872 24.8047 94.649 25.3261C94.2108 25.8474 93.5835 26.1081 92.7669 26.1081C91.4623 26.1081 90.1578 25.7171 88.8532 24.935L87.0458 28.0482C87.942 28.8001 88.8682 29.2964 89.8242 29.5371ZM93.3195 8.09111C93.4988 7.97079 93.7229 7.91063 93.9917 7.91063C94.4 7.91063 94.7187 8.12119 94.9477 8.54228C95.1867 8.96338 95.3062 9.38949 95.3062 9.82062V17.8516C95.3062 19.3755 94.888 20.1375 94.0515 20.1375C93.7727 20.1375 93.5436 20.0623 93.3644 19.9119C93.1851 19.7615 93.0606 19.551 92.9909 19.2803C92.9212 18.9996 92.8764 18.7639 92.8565 18.5735C92.8366 18.3729 92.8266 18.1323 92.8266 17.8516V9.82062C92.8266 9.55994 92.8316 9.3544 92.8416 9.20401C92.8615 9.05362 92.9013 8.86312 92.961 8.63252C93.0308 8.39189 93.1503 8.21142 93.3195 8.09111Z"
          fill="white"
        />
        <path
          d="M105.074 26.6044V4.03051H110.421V6.61726C110.64 5.64472 111.044 4.92785 111.631 4.46665C112.229 4.00545 112.951 3.77485 113.797 3.77485C115.201 3.77485 116.292 4.22101 117.068 5.11334C117.845 5.99564 118.234 7.3592 118.234 9.20401V26.6044H112.961V9.76046C112.961 9.28923 112.866 8.87315 112.677 8.5122C112.488 8.15126 112.184 7.97079 111.766 7.97079C111.507 7.97079 111.288 8.04599 111.108 8.19638C110.929 8.33675 110.795 8.50218 110.705 8.69268C110.625 8.87315 110.561 9.11378 110.511 9.41456C110.461 9.71535 110.431 9.94595 110.421 10.1064V26.6044H105.074Z"
          fill="white"
        />
        <path
          d="M19.7961 91.6923V61.0369H26.159V68.254C26.8276 66.3109 28.0898 65.3394 29.9457 65.3394C31.5825 65.3394 32.8793 65.8714 33.8361 66.9355C34.7928 67.988 35.2712 69.5609 35.2712 71.6544V91.6923H29.0639V73.3545C29.0754 73.1464 29.0811 72.9844 29.0811 72.8688C29.0811 71.0414 28.5682 70.1277 27.5423 70.1277C27.2426 70.1277 26.9371 70.278 26.6259 70.5787C26.3147 70.8679 26.159 71.3421 26.159 72.0013V91.6923H19.7961Z"
          fill="white"
        />
        <path
          d="M0.000488281 84.371V64.0556H5.91386V84.666C5.92539 84.8395 5.95421 85.0766 6.00031 85.3773C6.05795 85.678 6.13287 85.9151 6.22509 86.0886C6.32883 86.2621 6.47869 86.4182 6.67464 86.557C6.87061 86.6842 7.11268 86.7478 7.40085 86.7478C7.64292 86.7478 7.8504 86.7074 8.02331 86.6264C8.20774 86.5454 8.35183 86.424 8.45557 86.2621C8.55932 86.0886 8.64001 85.9267 8.69765 85.7763C8.76681 85.6144 8.81291 85.4062 8.83597 85.1517C8.85902 84.8857 8.87055 84.6833 8.87055 84.5445C8.88208 84.4057 8.88784 84.2091 8.88784 83.9547V64.0556H14.8012V84.371C14.8012 86.8693 14.2018 88.7661 13.003 90.0615C11.8157 91.3568 9.95985 91.9987 7.43543 91.9872C4.8649 91.9987 2.98023 91.3568 1.78142 90.0615C0.594131 88.7661 0.000488281 86.8693 0.000488281 84.371Z"
          fill="white"
        />
        <path
          d="M46.2832 64.0556H40.0932L41.3035 84.0761H45.0728L46.2832 64.0556Z"
          fill="white"
        />
        <path
          d="M40.0932 86.505V91.6749H46.2832V86.505H40.0932Z"
          fill="white"
        />
      </svg>
      <svg
        className={`${styles.ddLogoName} ${styles.svg}`}
        id="design-duh-mg"
        width="119"
        height="92"
        viewBox="0 0 119 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_4520_19329"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="119"
          height="92"
        >
          <path
            d="M78.0099 26.6044V4.03051H83.3575V26.6044H78.0099Z"
            fill="white"
          />
          <path d="M78.0099 2.6469V0H83.3575V2.6469H78.0099Z" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.8106 26.6194C49.4579 26.7899 50.1799 26.8751 50.9766 26.8751C52.321 26.8751 53.4413 26.6996 54.3375 26.3487C55.2338 25.9978 55.9209 25.4714 56.3989 24.7696C56.8869 24.0578 57.2254 23.2607 57.4146 22.3784C57.6039 21.4961 57.6985 20.4283 57.6985 19.175V17.8967H52.3807C52.4006 17.9769 52.4106 18.4582 52.4106 19.3405C52.4106 19.7916 52.4006 20.1676 52.3807 20.4684C52.3608 20.7692 52.311 21.1151 52.2313 21.5061C52.1616 21.8871 52.0371 22.1829 51.8579 22.3934C51.6786 22.5939 51.4446 22.6942 51.1558 22.6942C50.877 22.6942 50.643 22.629 50.4538 22.4987C50.2745 22.3583 50.1451 22.1578 50.0654 21.8971C49.9857 21.6264 49.931 21.3657 49.9011 21.1151C49.8712 20.8544 49.8563 20.5436 49.8563 20.1826V19.6713C49.8662 19.4407 49.8712 19.2753 49.8712 19.175V16.0168H57.6387C57.6785 15.2548 57.6985 13.8561 57.6985 11.8208V10.1816C57.6985 5.91042 55.5475 3.77485 51.2455 3.77485C49.1243 3.77485 47.4712 4.32628 46.2862 5.42916C45.1111 6.52201 44.5236 8.10615 44.5236 10.1816V19.2502C44.5236 19.8117 44.5385 20.323 44.5684 20.7842C44.6082 21.2454 44.6829 21.7467 44.7924 22.2881C44.9119 22.8296 45.0663 23.3108 45.2555 23.7319C45.4447 24.153 45.6987 24.5691 46.0173 24.9802C46.3459 25.3812 46.7293 25.7171 47.1675 25.9878C47.6156 26.2485 48.1633 26.459 48.8106 26.6194ZM50.4836 8.04599C50.6729 7.8956 50.9069 7.8204 51.1857 7.8204C51.9824 7.8204 52.3807 8.63252 52.3807 10.2568V12.6029H49.8712C49.8712 12.3923 49.8662 12.0765 49.8563 11.6554C49.8463 11.2343 49.8413 10.9185 49.8413 10.7079C49.8413 10.2668 49.8563 9.89581 49.8861 9.59503C49.916 9.28422 49.9758 8.98343 50.0654 8.69268C50.155 8.40192 50.2944 8.18636 50.4836 8.04599Z"
            fill="white"
          />
          <path
            d="M68.6907 9.91085L68.7206 10.7681H74.2176V10.347C74.2176 8.11116 73.6549 6.45684 72.5296 5.38404C71.4143 4.31124 69.806 3.77485 67.7048 3.77485C66.5596 3.77485 65.494 3.97036 64.5082 4.36138C63.5323 4.7524 62.7157 5.36901 62.0584 6.2112C61.4012 7.0534 61.0725 8.051 61.0725 9.20401C61.0725 9.84569 61.0974 10.3721 61.1472 10.7831C61.197 11.1842 61.3066 11.6404 61.4759 12.1517C61.6551 12.653 61.9339 13.1343 62.3124 13.5955C62.7007 14.0466 63.2036 14.5129 63.821 14.9941L66.6741 17.2049C67.0924 17.5257 67.4359 17.8315 67.7048 18.1223C67.9836 18.413 68.1928 18.6587 68.3322 18.8592C68.4816 19.0597 68.5861 19.2953 68.6459 19.566C68.7156 19.8267 68.7554 20.0272 68.7654 20.1676C68.7753 20.2979 68.7803 20.5135 68.7803 20.8143C68.7803 21.9874 68.4218 22.5739 67.7048 22.5739C67.5455 22.5739 67.4011 22.5588 67.2716 22.5288C67.1521 22.4987 67.0177 22.4335 66.8683 22.3333C66.7189 22.233 66.5994 22.0676 66.5098 21.837C66.4301 21.5963 66.3903 21.2955 66.3903 20.9346L66.3604 18.2877H61.0128L60.9829 20.0774C60.9829 24.6092 63.1937 26.8751 67.6152 26.8751C69.6865 26.8751 71.3247 26.3237 72.5296 25.2208C73.7445 24.1079 74.352 22.4736 74.352 20.318C74.352 19.917 74.3371 19.556 74.3072 19.2352C74.2773 18.9143 74.1877 18.4983 74.0383 17.9869C73.8989 17.4756 73.7047 16.9993 73.4557 16.5582C73.2168 16.107 72.8582 15.6107 72.3802 15.0693C71.9023 14.5279 71.3346 14.0116 70.6774 13.5203L67.3762 11.0839C66.7388 10.6127 66.4202 9.97602 66.4202 9.17393C66.4202 8.79294 66.5148 8.49717 66.704 8.28662C66.9032 8.07607 67.187 7.97079 67.5554 7.97079C67.7745 7.97079 67.9637 8.03596 68.1231 8.1663C68.2824 8.29664 68.4019 8.4721 68.4816 8.69268C68.5612 8.90323 68.616 9.10876 68.6459 9.30929C68.6758 9.50981 68.6907 9.71033 68.6907 9.91085Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M89.8237 29.5371C90.7896 29.7877 92.0046 29.913 93.4684 29.913C94.6933 29.913 95.734 29.7977 96.5904 29.5671C97.4568 29.3466 98.2086 28.9706 98.8459 28.4392C99.4932 27.9078 99.9712 27.1759 100.28 26.2435C100.599 25.311 100.758 24.158 100.758 22.7844V4.04555H95.3058V6.58718C95.1862 6.03574 94.997 5.56953 94.7381 5.18853C94.4892 4.79751 94.2004 4.50676 93.8717 4.31626C93.5431 4.11574 93.2195 3.97537 92.9008 3.89516C92.5821 3.81495 92.2436 3.77485 91.8851 3.77485C91.188 3.77485 90.5755 3.87511 90.0477 4.07563C89.5299 4.27615 89.0668 4.60702 88.6586 5.06822C88.2503 5.52942 87.9416 6.1711 87.7324 6.99324C87.5233 7.80536 87.4187 8.79795 87.4187 9.97101V18.4381C87.4187 19.2302 87.4984 19.9621 87.6577 20.6338C87.827 21.3056 88.081 21.9122 88.4196 22.4536C88.7581 22.995 89.2212 23.4211 89.8087 23.7319C90.4062 24.0427 91.0984 24.1981 91.8851 24.1981C93.7274 24.1981 94.8676 23.4261 95.3058 21.8821V23.1303C95.3058 24.0728 95.0867 24.8047 94.6485 25.3261C94.2103 25.8474 93.583 26.1081 92.7664 26.1081C91.4618 26.1081 90.1573 25.7171 88.8527 24.935L87.0453 28.0482C87.9416 28.8001 88.8677 29.2964 89.8237 29.5371ZM93.3191 8.09111C93.4983 7.97079 93.7224 7.91063 93.9913 7.91063C94.3996 7.91063 94.7182 8.12119 94.9473 8.54228C95.1862 8.96338 95.3058 9.38949 95.3058 9.82062V17.8516C95.3058 19.3755 94.8875 20.1375 94.051 20.1375C93.7722 20.1375 93.5431 20.0623 93.3639 19.9119C93.1846 19.7615 93.0602 19.551 92.9904 19.2803C92.9207 18.9996 92.8759 18.7639 92.856 18.5735C92.8361 18.3729 92.8261 18.1323 92.8261 17.8516V9.82062C92.8261 9.55994 92.8311 9.3544 92.8411 9.20401C92.861 9.05362 92.9008 8.86312 92.9606 8.63252C93.0303 8.39189 93.1498 8.21142 93.3191 8.09111Z"
            fill="white"
          />
          <path
            d="M105.073 26.6044V4.03051H110.421V6.61726C110.64 5.64472 111.043 4.92785 111.631 4.46665C112.228 4.00545 112.95 3.77485 113.797 3.77485C115.201 3.77485 116.291 4.22101 117.068 5.11334C117.845 5.99564 118.233 7.3592 118.233 9.20401V26.6044H112.96V9.76046C112.96 9.28923 112.866 8.87315 112.676 8.5122C112.487 8.15126 112.183 7.97079 111.765 7.97079C111.506 7.97079 111.287 8.04599 111.108 8.19638C110.929 8.33675 110.794 8.50218 110.705 8.69268C110.625 8.87315 110.56 9.11378 110.51 9.41456C110.461 9.71535 110.431 9.94595 110.421 10.1064V26.6044H105.073Z"
            fill="white"
          />
          <path
            d="M19.7956 91.6923V61.0369H26.1586V68.254C26.8271 66.3109 28.0893 65.3394 29.9452 65.3394C31.582 65.3394 32.8788 65.8714 33.8356 66.9355C34.7923 67.988 35.2707 69.5609 35.2707 71.6544V91.6923H29.0634V73.3545C29.0749 73.1464 29.0807 72.9844 29.0807 72.8688C29.0807 71.0414 28.5677 70.1277 27.5418 70.1277C27.2421 70.1277 26.9366 70.278 26.6254 70.5787C26.3142 70.8679 26.1586 71.3421 26.1586 72.0013V91.6923H19.7956Z"
            fill="white"
          />
          <path
            d="M0 84.371V64.0556H5.91338V84.666C5.9249 84.8395 5.95372 85.0766 5.99982 85.3773C6.05746 85.678 6.13239 85.9151 6.2246 86.0886C6.32835 86.2621 6.4782 86.4182 6.67416 86.557C6.87012 86.6842 7.11219 86.7478 7.40036 86.7478C7.64243 86.7478 7.84991 86.7074 8.02282 86.6264C8.20725 86.5454 8.35134 86.424 8.45509 86.2621C8.55883 86.0886 8.63952 85.9267 8.69716 85.7763C8.76632 85.6144 8.81242 85.4062 8.83548 85.1517C8.85854 84.8857 8.87006 84.6833 8.87006 84.5445C8.88159 84.4057 8.88735 84.2091 8.88735 83.9547V64.0556H14.8007V84.371C14.8007 86.8693 14.2013 88.7661 13.0025 90.0615C11.8152 91.3568 9.95937 91.9987 7.43494 91.9872C4.86441 91.9987 2.97974 91.3568 1.78093 90.0615C0.593643 88.7661 0 86.8693 0 84.371Z"
            fill="white"
          />
          <path
            d="M46.2827 64.0556H40.0927L41.303 84.0761H45.0724L46.2827 64.0556Z"
            fill="white"
          />
          <path
            d="M40.0927 86.505V91.6749H46.2827V86.505H40.0927Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_4520_19329)">
          <g filter="url(#filter0_f_4520_19329)">
            <ellipse
              cx="7.60141"
              cy="40.7274"
              rx="78.32"
              ry="78.76"
              transform="rotate(113.295 7.60141 40.7274)"
              fill="#BFBBFF"
            />
          </g>
          <g filter="url(#filter1_f_4520_19329)">
            <ellipse
              cx="106.843"
              cy="68.0819"
              rx="78.32"
              ry="78.76"
              transform="rotate(113.295 106.843 68.0819)"
              fill="#CC81F4"
            />
          </g>
          <g filter="url(#filter2_f_4520_19329)">
            <ellipse
              cx="65.9959"
              cy="-22.1036"
              rx="78.32"
              ry="78.76"
              transform="rotate(113.295 65.9959 -22.1036)"
              fill="#F8C3F9"
            />
          </g>
          <g filter="url(#filter3_f_4520_19329)">
            <ellipse
              cx="-93.1789"
              cy="44.5526"
              rx="78.32"
              ry="78.76"
              transform="rotate(113.295 -93.1789 44.5526)"
              fill="#CDA5FF"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_4520_19329"
            x="-127.11"
            y="-93.6816"
            width="269.423"
            height="268.818"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19329"
            />
          </filter>
          <filter
            id="filter1_f_4520_19329"
            x="-27.8684"
            y="-66.3271"
            width="269.423"
            height="268.818"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19329"
            />
          </filter>
          <filter
            id="filter2_f_4520_19329"
            x="-68.7156"
            y="-156.513"
            width="269.423"
            height="268.818"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19329"
            />
          </filter>
          <filter
            id="filter3_f_4520_19329"
            x="-227.89"
            y="-89.8564"
            width="269.423"
            height="268.818"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19329"
            />
          </filter>
        </defs>
      </svg>
      <svg
        style={{ width: "100%", height: "100%" }}
        className="svg-logo"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Union"
          d="M72.9577 0H106.301C141.347 0 143.023 0.0510094 149.282 1.30536C161.401 3.73414 172.405 9.73073 181.44 18.8286C191.722 29.1828 197.937 42.0724 199.758 56.8228C200.247 60.7834 199.955 71.0293 199.238 75.1024C197.806 83.2268 194.993 90.8116 190.882 97.6317C182.377 111.739 168.088 122.426 152.396 126.415C152.058 126.501 151.741 126.582 151.439 126.66L151.438 126.66C150.461 126.912 149.644 127.122 148.82 127.298C144.622 128.195 140.238 128.208 113.512 128.284L108.384 128.299H100.028V128.54C100.013 128.459 99.9973 128.379 99.9814 128.299H99.9719V128.251C98.5191 120.949 94.8039 114.515 91.1738 111.126C86.5393 105.858 80.5159 102.031 73.8076 100.093C67.0994 98.1539 59.9834 98.1835 53.2912 100.178C46.599 102.173 40.607 106.05 36.0156 111.356C31.4241 116.662 28.4229 123.179 27.3625 130.144C26.3022 137.109 27.2265 144.236 30.0275 150.69C32.8286 157.144 37.3906 162.66 43.1804 166.593C48.9703 170.526 55.7489 172.713 62.7239 172.899L101.278 172.781L100.567 133.562L100.597 133.626H127.042V200H93.6991C58.6535 200 56.9774 199.949 50.7177 198.695C38.5992 196.266 27.5947 190.269 18.5598 181.171C8.27758 170.817 2.0633 157.928 0.241901 143.177C-0.246922 139.217 0.0446112 128.971 0.762122 124.898C2.19377 116.773 5.00682 109.188 9.11826 102.368C17.6226 88.2609 31.9124 77.5737 47.6044 73.5851C47.9417 73.4993 48.2589 73.4177 48.5607 73.3401L48.5624 73.3396C49.5391 73.0883 50.3561 72.878 51.1798 72.702C55.378 71.8046 59.7616 71.7922 86.4876 71.7161L91.6159 71.7013H99.9719V71.4626C99.987 71.5422 100.002 71.6218 100.018 71.7013H100.028V71.7517C101.481 79.0529 105.196 85.4864 108.826 88.8744C113.46 94.1424 119.484 97.9694 126.192 99.9081C132.9 101.847 140.016 101.817 146.709 99.8228C153.401 97.8283 159.393 93.9513 163.984 88.6449C168.576 83.3385 171.577 76.8219 172.637 69.8566C173.698 62.8914 172.773 55.7651 169.972 49.3108C167.171 42.8564 162.609 37.3405 156.819 33.4077C151.029 29.4749 144.251 27.2876 137.276 27.1015L98.7216 27.2199L99.4485 67.3153C99.4538 67.4017 99.4594 67.4879 99.4654 67.5741H72.9577V0Z"
          fill="white"
        />
      </svg>
      <svg
        style={{ width: "100%", height: "100%" }}
        className="svg-mask"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Mask group">
          <mask
            id="mask0_4520_19270"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="200"
            height="200"
          >
            <path
              id="Union"
              d="M72.9577 0H106.301C141.347 0 143.023 0.0510094 149.282 1.30536C161.401 3.73414 172.405 9.73073 181.44 18.8286C191.722 29.1828 197.937 42.0724 199.758 56.8228C200.247 60.7834 199.955 71.0293 199.238 75.1024C197.806 83.2268 194.993 90.8116 190.882 97.6317C182.377 111.739 168.088 122.426 152.396 126.415C152.058 126.501 151.741 126.582 151.439 126.66L151.438 126.66C150.461 126.912 149.644 127.122 148.82 127.298C144.622 128.195 140.238 128.208 113.512 128.284L108.384 128.299H100.028V128.54C100.013 128.459 99.9973 128.379 99.9814 128.299H99.9719V128.251C98.5191 120.949 94.8039 114.515 91.1738 111.126C86.5393 105.858 80.5159 102.031 73.8076 100.093C67.0994 98.1539 59.9834 98.1835 53.2912 100.178C46.599 102.173 40.607 106.05 36.0156 111.356C31.4241 116.662 28.4229 123.179 27.3625 130.144C26.3022 137.109 27.2265 144.236 30.0275 150.69C32.8286 157.144 37.3906 162.66 43.1804 166.593C48.9703 170.526 55.7489 172.713 62.7239 172.899L101.278 172.781L100.567 133.562L100.597 133.626H127.042V200H93.6991C58.6535 200 56.9774 199.949 50.7177 198.695C38.5992 196.266 27.5947 190.269 18.5598 181.171C8.27758 170.817 2.0633 157.928 0.241901 143.177C-0.246922 139.217 0.0446112 128.971 0.762122 124.898C2.19377 116.773 5.00682 109.188 9.11826 102.368C17.6226 88.2609 31.9124 77.5737 47.6044 73.5851C47.9417 73.4993 48.2589 73.4177 48.5607 73.3401L48.5624 73.3396C49.5391 73.0883 50.3561 72.878 51.1798 72.702C55.378 71.8046 59.7616 71.7922 86.4876 71.7161L91.6159 71.7013H99.9719V71.4626C99.987 71.5422 100.002 71.6218 100.018 71.7013H100.028V71.7517C101.481 79.0529 105.196 85.4864 108.826 88.8744C113.46 94.1424 119.484 97.9694 126.192 99.9081C132.9 101.847 140.016 101.817 146.709 99.8228C153.401 97.8283 159.393 93.9513 163.984 88.6449C168.576 83.3385 171.577 76.8219 172.637 69.8566C173.698 62.8914 172.773 55.7651 169.972 49.3108C167.171 42.8564 162.609 37.3405 156.819 33.4077C151.029 29.4749 144.251 27.2876 137.276 27.1015L98.7216 27.2199L99.4485 67.3153C99.4538 67.4017 99.4594 67.4879 99.4654 67.5741H72.9577V0Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_4520_19270)">
            <g id="ellipse-1" filter="url(#filter0_f_4520_19270)">
              <ellipse
                cx="105.736"
                cy="67.5462"
                rx="78.32"
                ry="78.76"
                transform="rotate(-89.369 105.736 67.5462)"
                fill="#BFBBFF"
              />
            </g>
            <g id="ellipse-2" filter="url(#filter3_f_4520_19270)">
              <ellipse
                cx="192.26"
                cy="27.1829"
                rx="78.32"
                ry="78.76"
                transform="rotate(-89.369 192.26 27.1829)"
                fill="#CDA5FF"
              />
            </g>
            <g id="ellipse-3" filter="url(#filter1_f_4520_19270)">
              <ellipse
                cx="22.6177"
                cy="70.5452"
                rx="78.32"
                ry="78.76"
                transform="rotate(-89.369 22.6177 70.5452)"
                fill="#CC81F4"
              />
            </g>
            <g id="ellipse-4" filter="url(#filter2_f_4520_19270)">
              <ellipse
                cx="63.062"
                cy="148.027"
                rx="78.32"
                ry="78.76"
                transform="rotate(-89.369 63.062 148.027)"
                fill="#F8C3F9"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_4520_19270"
            x="-29.0237"
            y="-66.7739"
            width="269.52"
            height="268.64"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19270"
            />
          </filter>
          <filter
            id="filter1_f_4520_19270"
            x="-112.142"
            y="-63.7749"
            width="269.52"
            height="268.64"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19270"
            />
          </filter>
          <filter
            id="filter2_f_4520_19270"
            x="-71.698"
            y="13.7065"
            width="269.52"
            height="268.64"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19270"
            />
          </filter>
          <filter
            id="filter3_f_4520_19270"
            x="57.5002"
            y="-107.137"
            width="269.52"
            height="268.64"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19270"
            />
          </filter>
        </defs>
      </svg>
      <svg
        className={styles.star}
        width="76"
        height="69"
        viewBox="0 0 76 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dii_4520_19286)">
          <path
            d="M38 -5L41.0547 27.9453L74 31L41.0547 34.0547L38 67L34.9453 34.0547L2 31L34.9453 27.9453L38 -5Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_dii_4520_19286"
            x="0"
            y="-7"
            width="76"
            height="76"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.34 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4520_19286"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4520_19286"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.5" dy="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.892301 0 0 0 0 0.892301 0 0 0 0 0.892301 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_4520_19286"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-0.1" dy="-0.2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.894118 0 0 0 0 0.894118 0 0 0 0 0.894118 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_4520_19286"
              result="effect3_innerShadow_4520_19286"
            />
          </filter>
        </defs>
      </svg>
      <img
        className={`${styles.chey} ${styles.img}`}
        src="/Chey.svg"
        alt="Ai generated image of Chetanya"
      />
      <img
        className={`${styles.sarda} ${styles.img}`}
        src="/Sarda.svg"
        alt="Ai generated image of Sarda"
      />
    </div>
  );
}
