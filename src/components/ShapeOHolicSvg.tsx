"use client";
import { useEffect, useState } from "react";
import styles from "./ShapeOHolicSvg.module.css";
import { motion, Transition } from "framer-motion";
import Image from "next/image";

const radialGradientTransition: Transition = {
  delay: 0.8,
  repeat: Infinity,
  repeatType: "mirror",
  repeatDelay: 0.8,
  duration: 1.2,
};

export default function ShapeOHolicSvg() {
  return (
    <div className={styles.container}>
      <div className={styles.shapeContainer}>
        <svg
          width="366"
          height="68"
          viewBox="0 0 366 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1_4520_18987"
            maskUnits="userSpaceOnUse"
            x="-1"
            y="-1"
            width="368"
            height="70"
            fill="black"
          >
            <rect fill="white" x="-1" y="-1" width="368" height="70" />
            <path d="M62.208 30.752L67.296 35.84V59.648L57.12 68H7.68L2.592 62.912V42.272H10.176L5.088 38.144L0 33.056V9.152L10.176 0.799995H59.424L64.512 5.984V26.528H57.024L62.208 30.752ZM137.774 0.799995L142.862 5.984V68H110.51L109.55 67.136V68H77.1982L72.1102 62.912V0.799995H104.462L105.422 1.75999V0.799995H137.774ZM213.985 9.152L219.073 14.24V68H186.721L185.761 67.136V68H153.409L148.321 62.912V9.152L158.497 0.799995H203.809L213.985 9.152ZM290.111 9.056L295.199 14.24V44.672L285.023 53.024H261.887V68H229.535L224.447 62.912V0.895994L279.935 0.799995L290.111 9.056ZM365.196 5.984V28.256H360.588L361.548 29.312V41.984L365.196 45.632V68H304.812L299.724 62.912V0.799995H360.108L365.196 5.984Z" />
          </mask>
          <path
            d="M62.208 30.752L67.296 35.84V59.648L57.12 68H7.68L2.592 62.912V42.272H10.176L5.088 38.144L0 33.056V9.152L10.176 0.799995H59.424L64.512 5.984V26.528H57.024L62.208 30.752ZM137.774 0.799995L142.862 5.984V68H110.51L109.55 67.136V68H77.1982L72.1102 62.912V0.799995H104.462L105.422 1.75999V0.799995H137.774ZM213.985 9.152L219.073 14.24V68H186.721L185.761 67.136V68H153.409L148.321 62.912V9.152L158.497 0.799995H203.809L213.985 9.152ZM290.111 9.056L295.199 14.24V44.672L285.023 53.024H261.887V68H229.535L224.447 62.912V0.895994L279.935 0.799995L290.111 9.056ZM365.196 5.984V28.256H360.588L361.548 29.312V41.984L365.196 45.632V68H304.812L299.724 62.912V0.799995H360.108L365.196 5.984Z"
            fill="url(#paint0_radial_4520_18987)"
          />
          <path
            d="M62.208 30.752L62.9151 30.0449L62.8791 30.0089L62.8397 29.9768L62.208 30.752ZM67.296 35.84H68.296V35.4258L68.0031 35.1329L67.296 35.84ZM67.296 59.648L67.9304 60.421L68.296 60.1209V59.648H67.296ZM57.12 68V69H57.4778L57.7544 68.773L57.12 68ZM7.68 68L6.97289 68.7071L7.26579 69H7.68V68ZM2.592 62.912H1.592V63.3262L1.88489 63.6191L2.592 62.912ZM2.592 42.272V41.272H1.592V42.272H2.592ZM10.176 42.272V43.272H12.9958L10.806 41.4954L10.176 42.272ZM5.088 38.144L4.38089 38.8511L4.41762 38.8878L4.45796 38.9206L5.088 38.144ZM0 33.056H-1V33.4702L-0.707107 33.7631L0 33.056ZM0 9.152L-0.634428 8.37901L-1 8.67906V9.152H0ZM10.176 0.799995V-0.200005H9.81817L9.54157 0.0270138L10.176 0.799995ZM59.424 0.799995L60.1377 0.0995278L59.8437 -0.200005H59.424V0.799995ZM64.512 5.984H65.512V5.57525L65.2257 5.28353L64.512 5.984ZM64.512 26.528V27.528H65.512V26.528H64.512ZM57.024 26.528V25.528H54.2136L56.3923 27.3032L57.024 26.528ZM61.5009 31.4591L66.5889 36.5471L68.0031 35.1329L62.9151 30.0449L61.5009 31.4591ZM66.296 35.84V59.648H68.296V35.84H66.296ZM66.6616 58.875L56.4856 67.227L57.7544 68.773L67.9304 60.421L66.6616 58.875ZM57.12 67H7.68V69H57.12V67ZM8.38711 67.2929L3.29911 62.2049L1.88489 63.6191L6.97289 68.7071L8.38711 67.2929ZM3.592 62.912V42.272H1.592V62.912H3.592ZM2.592 43.272H10.176V41.272H2.592V43.272ZM10.806 41.4954L5.71804 37.3674L4.45796 38.9206L9.54596 43.0486L10.806 41.4954ZM5.79511 37.4369L0.707107 32.3489L-0.707107 33.7631L4.38089 38.8511L5.79511 37.4369ZM1 33.056V9.152H-1V33.056H1ZM0.634428 9.92498L10.8104 1.57298L9.54157 0.0270138L-0.634428 8.37901L0.634428 9.92498ZM10.176 1.8H59.424V-0.200005H10.176V1.8ZM58.7103 1.50046L63.7983 6.68447L65.2257 5.28353L60.1377 0.0995278L58.7103 1.50046ZM63.512 5.984V26.528H65.512V5.984H63.512ZM64.512 25.528H57.024V27.528H64.512V25.528ZM56.3923 27.3032L61.5763 31.5272L62.8397 29.9768L57.6557 25.7528L56.3923 27.3032ZM137.774 0.799995L138.488 0.0995278L138.194 -0.200005H137.774V0.799995ZM142.862 5.984H143.862V5.57525L143.576 5.28353L142.862 5.984ZM142.862 68V69H143.862V68H142.862ZM110.51 68L109.841 68.7433L110.127 69H110.51V68ZM109.55 67.136L110.219 66.3927L108.55 64.8906V67.136H109.55ZM109.55 68V69H110.55V68H109.55ZM77.1982 68L76.4911 68.7071L76.784 69H77.1982V68ZM72.1102 62.912H71.1102V63.3262L71.4031 63.6191L72.1102 62.912ZM72.1102 0.799995V-0.200005H71.1102V0.799995H72.1102ZM104.462 0.799995L105.169 0.0928888L104.876 -0.200005H104.462V0.799995ZM105.422 1.75999L104.715 2.4671L106.422 4.17421V1.75999H105.422ZM105.422 0.799995V-0.200005H104.422V0.799995H105.422ZM137.061 1.50046L142.149 6.68447L143.576 5.28353L138.488 0.0995278L137.061 1.50046ZM141.862 5.984V68H143.862V5.984H141.862ZM142.862 67H110.51V69H142.862V67ZM111.179 67.2567L110.219 66.3927L108.881 67.8793L109.841 68.7433L111.179 67.2567ZM108.55 67.136V68H110.55V67.136H108.55ZM109.55 67H77.1982V69H109.55V67ZM77.9053 67.2929L72.8174 62.2049L71.4031 63.6191L76.4911 68.7071L77.9053 67.2929ZM73.1102 62.912V0.799995H71.1102V62.912H73.1102ZM72.1102 1.8H104.462V-0.200005H72.1102V1.8ZM103.755 1.5071L104.715 2.4671L106.129 1.05289L105.169 0.0928888L103.755 1.5071ZM106.422 1.75999V0.799995H104.422V1.75999H106.422ZM105.422 1.8H137.774V-0.200005H105.422V1.8ZM213.985 9.152L214.692 8.44489L214.657 8.41017L214.619 8.37901L213.985 9.152ZM219.073 14.24H220.073V13.8258L219.78 13.5329L219.073 14.24ZM219.073 68V69H220.073V68H219.073ZM186.721 68L186.052 68.7433L186.337 69H186.721V68ZM185.761 67.136L186.43 66.3927L184.761 64.8906V67.136H185.761ZM185.761 68V69H186.761V68H185.761ZM153.409 68L152.702 68.7071L152.995 69H153.409V68ZM148.321 62.912H147.321V63.3262L147.614 63.6191L148.321 62.912ZM148.321 9.152L147.686 8.37901L147.321 8.67906V9.152H148.321ZM158.497 0.799995V-0.200005H158.139L157.862 0.0270138L158.497 0.799995ZM203.809 0.799995L204.443 0.0270138L204.167 -0.200005H203.809V0.799995ZM213.278 9.8591L218.366 14.9471L219.78 13.5329L214.692 8.44489L213.278 9.8591ZM218.073 14.24V68H220.073V14.24H218.073ZM219.073 67H186.721V69H219.073V67ZM187.39 67.2567L186.43 66.3927L185.092 67.8793L186.052 68.7433L187.39 67.2567ZM184.761 67.136V68H186.761V67.136H184.761ZM185.761 67H153.409V69H185.761V67ZM154.116 67.2929L149.028 62.2049L147.614 63.6191L152.702 68.7071L154.116 67.2929ZM149.321 62.912V9.152H147.321V62.912H149.321ZM148.955 9.92498L159.131 1.57298L157.862 0.0270138L147.686 8.37901L148.955 9.92498ZM158.497 1.8H203.809V-0.200005H158.497V1.8ZM203.174 1.57298L213.35 9.92498L214.619 8.37901L204.443 0.0270138L203.174 1.57298ZM290.111 9.056L290.824 8.35553L290.785 8.31511L290.741 8.27944L290.111 9.056ZM295.199 14.24H296.199V13.8312L295.912 13.5395L295.199 14.24ZM295.199 44.672L295.833 45.445L296.199 45.1449V44.672H295.199ZM285.023 53.024V54.024H285.38L285.657 53.797L285.023 53.024ZM261.887 53.024V52.024H260.887V53.024H261.887ZM261.887 68V69H262.887V68H261.887ZM229.535 68L228.827 68.7071L229.12 69H229.535V68ZM224.447 62.912H223.447V63.3262L223.739 63.6191L224.447 62.912ZM224.447 0.895994L224.445 -0.104004L223.447 -0.102277V0.895994H224.447ZM279.935 0.799995L280.565 0.0234337L280.288 -0.200618L279.933 -0.200003L279.935 0.799995ZM289.397 9.75647L294.485 14.9405L295.912 13.5395L290.824 8.35553L289.397 9.75647ZM294.199 14.24V44.672H296.199V14.24H294.199ZM294.564 43.899L284.388 52.251L285.657 53.797L295.833 45.445L294.564 43.899ZM285.023 52.024H261.887V54.024H285.023V52.024ZM260.887 53.024V68H262.887V53.024H260.887ZM261.887 67H229.535V69H261.887V67ZM230.242 67.2929L225.154 62.2049L223.739 63.6191L228.827 68.7071L230.242 67.2929ZM225.447 62.912V0.895994H223.447V62.912H225.447ZM224.448 1.89599L279.936 1.79999L279.933 -0.200003L224.445 -0.104004L224.448 1.89599ZM279.304 1.57656L289.48 9.83256L290.741 8.27944L280.565 0.0234337L279.304 1.57656ZM365.196 5.984H366.196V5.57525L365.91 5.28353L365.196 5.984ZM365.196 28.256V29.256H366.196V28.256H365.196ZM360.588 28.256V27.256H358.327L359.848 28.9287L360.588 28.256ZM361.548 29.312H362.548V28.9254L362.288 28.6393L361.548 29.312ZM361.548 41.984H360.548V42.3982L360.841 42.6911L361.548 41.984ZM365.196 45.632H366.196V45.2178L365.903 44.9249L365.196 45.632ZM365.196 68V69H366.196V68H365.196ZM304.812 68L304.105 68.7071L304.398 69H304.812V68ZM299.724 62.912H298.724V63.3262L299.017 63.6191L299.724 62.912ZM299.724 0.799995V-0.200005H298.724V0.799995H299.724ZM360.108 0.799995L360.822 0.0995278L360.528 -0.200005H360.108V0.799995ZM364.196 5.984V28.256H366.196V5.984H364.196ZM365.196 27.256H360.588V29.256H365.196V27.256ZM359.848 28.9287L360.808 29.9847L362.288 28.6393L361.328 27.5833L359.848 28.9287ZM360.548 29.312V41.984H362.548V29.312H360.548ZM360.841 42.6911L364.489 46.3391L365.903 44.9249L362.255 41.2769L360.841 42.6911ZM364.196 45.632V68H366.196V45.632H364.196ZM365.196 67H304.812V69H365.196V67ZM305.519 67.2929L300.431 62.2049L299.017 63.6191L304.105 68.7071L305.519 67.2929ZM300.724 62.912V0.799995H298.724V62.912H300.724ZM299.724 1.8H360.108V-0.200005H299.724V1.8ZM359.394 1.50046L364.482 6.68447L365.91 5.28353L360.822 0.0995278L359.394 1.50046Z"
            fill="url(#paint1_linear_4520_18987)"
            fillOpacity="0.34"
            mask="url(#path-1-outside-1_4520_18987)"
          />
          <defs>
            <motion.radialGradient
              initial={{
                gradientTransform:
                  "translate(7.50002 3.99996) rotate(47.5708) scale(86.7079 348.737)",
              }}
              animate={{
                gradientTransform:
                  "translate(298.5 2) rotate(42.9691) scale(99.7647 401.252)",
              }}
              transition={radialGradientTransition}
              id="paint0_radial_4520_18987"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(7.50002 3.99996) rotate(47.5708) scale(86.7079 348.737)"
            >
              <stop stopColor="#CA88FF" />
              <stop offset="1" stopColor="#3F1767" />
            </motion.radialGradient>
            <linearGradient
              id="paint1_linear_4520_18987"
              x1="3.5"
              y1="4"
              x2="366"
              y2="71.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B366FF" />
              <stop offset="1" stopColor="#401868" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className={styles.shapeWhite}
          width="360"
          height="60"
          viewBox="0 0 360 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M153.707 3.88358L149.005 7.73955L149 33.7574C148.998 48.0672 149.136 59.8334 149.309 59.9046C149.482 59.9757 156.071 59.982 163.952 59.9184L178.28 59.8033V49.9825V40.162H180.783H183.285L183.398 50.0979C183.501 59.2544 183.567 60.0309 184.242 59.9991C184.644 59.9799 191.186 59.9326 198.78 59.8945L212.585 59.8247V33.7135V7.60233L207.891 3.80117L203.197 0L180.802 0.0138057L158.408 0.0280297L153.707 3.88358ZM178.28 18.1984V25.5196H180.79H183.3V18.1984V10.8772H180.79H178.28V18.1984Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.86347 3.9091L0.0477993 7.75698L0.024115 18.8683L0 29.9797L4.83936 33.8443L9.67914 37.7085L21.629 37.7228L33.5788 37.7366V40.4822V43.2273L18.283 43.1028L2.98724 42.9778L3.10351 51.4891L3.21978 60L27.9006 59.9698L52.5814 59.9396L57.2907 56.1446L62 52.3495L61.9772 41.1648L61.9543 29.9797L56.9867 26.1012L52.0186 22.2227H40.2151H28.4113V19.7069V17.1911H43.6985H58.9856V8.59557V0L34.3324 0.0306086L9.67914 0.0616365L4.86347 3.9091Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M73 29.719C73 46.0646 73.1406 59.4958 73.312 59.5665C73.4834 59.6373 80.0353 59.641 87.8718 59.5753L102.12 59.4555V48.4474V37.4394H104.824H107.527V48.7199V60L108.463 59.7492C108.978 59.6115 115.53 59.4958 123.023 59.4929L136.647 59.4871V29.7435V0H122.087H107.527V9.15186V18.3037H104.824H102.12V9.15186V0H87.5598H73V29.719Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M225 30.0002V60L225.936 59.7492C226.451 59.6115 233.002 59.4958 240.496 59.4929L254.12 59.4871V51.7912V44.0953H266.54H278.961L283.596 40.289L288.231 36.4826V22.066V7.64929L283.503 3.82465L278.774 0H251.887H225V30.0002ZM254.12 22.2557V33.6955H256.616H259.111V22.2557V10.8158H256.616H254.12V22.2557Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M301 30.1207C301 57.4152 301.062 60.2177 301.661 59.9879C302.024 59.8484 315.089 59.7344 330.693 59.7344H359.065V50.3356V40.9368H344.653H330.241V38.4305V35.9242H342.773H355.305V30.076V24.2279H342.773H330.241V21.5127V18.7975H344.653H359.065V9.39876V0H330.032H301V30.1207Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.oHolicContainer}>
        <svg
          width="337"
          height="68"
          viewBox="0 0 337 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1_4520_19004"
            maskUnits="userSpaceOnUse"
            x="-1"
            y="-1"
            width="339"
            height="70"
            fill="black"
          >
            <rect fill="white" x="-1" y="-1" width="339" height="70" />
            <path d="M66.528 0.799995L71.616 5.984V68H39.264L38.304 67.136V68H5.952L0.864 62.912V0.799995H33.216L34.176 1.75999V0.799995H66.528ZM142.45 9.056L147.539 14.24V59.648L137.363 68H92.0505L81.8745 59.648L76.7865 54.56V9.056L86.9625 0.799995H132.274L142.45 9.056ZM206.971 40.544L212.059 45.632V68H157.819L152.731 62.912V0.799995H185.083L190.171 5.984V40.544H206.971ZM261.035 27.104H255.563V41.792H255.947L261.035 46.88V68H220.523L215.435 62.912V41.792H221.003V27.104H220.523L215.435 22.016V0.799995H255.947L261.035 5.984V27.104ZM336.527 14.24V36.032H334.991L336.527 37.664V59.648L326.351 68H281.039L270.863 59.648L265.775 54.56V9.152L275.951 0.799995H321.263L331.439 9.152L336.527 14.24Z" />
          </mask>
          <path
            d="M66.528 0.799995L71.616 5.984V68H39.264L38.304 67.136V68H5.952L0.864 62.912V0.799995H33.216L34.176 1.75999V0.799995H66.528ZM142.45 9.056L147.539 14.24V59.648L137.363 68H92.0505L81.8745 59.648L76.7865 54.56V9.056L86.9625 0.799995H132.274L142.45 9.056ZM206.971 40.544L212.059 45.632V68H157.819L152.731 62.912V0.799995H185.083L190.171 5.984V40.544H206.971ZM261.035 27.104H255.563V41.792H255.947L261.035 46.88V68H220.523L215.435 62.912V41.792H221.003V27.104H220.523L215.435 22.016V0.799995H255.947L261.035 5.984V27.104ZM336.527 14.24V36.032H334.991L336.527 37.664V59.648L326.351 68H281.039L270.863 59.648L265.775 54.56V9.152L275.951 0.799995H321.263L331.439 9.152L336.527 14.24Z"
            fill="url(#paint0_radial_4520_19004)"
          />
          <path
            d="M66.528 0.799995L67.2417 0.0995278L66.9477 -0.200005H66.528V0.799995ZM71.616 5.984H72.616V5.57525L72.3297 5.28353L71.616 5.984ZM71.616 68V69H72.616V68H71.616ZM39.264 68L38.595 68.7433L38.8803 69H39.264V68ZM38.304 67.136L38.973 66.3927L37.304 64.8906V67.136H38.304ZM38.304 68V69H39.304V68H38.304ZM5.952 68L5.24489 68.7071L5.53779 69H5.952V68ZM0.864 62.912H-0.136V63.3262L0.156893 63.6191L0.864 62.912ZM0.864 0.799995V-0.200005H-0.136V0.799995H0.864ZM33.216 0.799995L33.9231 0.0928888L33.6302 -0.200005H33.216V0.799995ZM34.176 1.75999L33.4689 2.4671L35.176 4.17421V1.75999H34.176ZM34.176 0.799995V-0.200005H33.176V0.799995H34.176ZM65.8143 1.50046L70.9023 6.68447L72.3297 5.28353L67.2417 0.0995278L65.8143 1.50046ZM70.616 5.984V68H72.616V5.984H70.616ZM71.616 67H39.264V69H71.616V67ZM39.933 67.2567L38.973 66.3927L37.635 67.8793L38.595 68.7433L39.933 67.2567ZM37.304 67.136V68H39.304V67.136H37.304ZM38.304 67H5.952V69H38.304V67ZM6.65911 67.2929L1.57111 62.2049L0.156893 63.6191L5.24489 68.7071L6.65911 67.2929ZM1.864 62.912V0.799995H-0.136V62.912H1.864ZM0.864 1.8H33.216V-0.200005H0.864V1.8ZM32.5089 1.5071L33.4689 2.4671L34.8831 1.05289L33.9231 0.0928888L32.5089 1.5071ZM35.176 1.75999V0.799995H33.176V1.75999H35.176ZM34.176 1.8H66.528V-0.200005H34.176V1.8ZM142.451 9.056L143.164 8.35553L143.125 8.31511L143.081 8.27944L142.451 9.056ZM147.538 14.24H148.538V13.8312L148.252 13.5395L147.538 14.24ZM147.538 59.648L148.173 60.421L148.538 60.1209V59.648H147.538ZM137.363 68V69H137.72L137.997 68.773L137.363 68ZM92.0505 68L91.4161 68.773L91.6927 69H92.0505V68ZM81.8745 59.648L81.1674 60.3551L81.2021 60.3898L81.2401 60.421L81.8745 59.648ZM76.7865 54.56H75.7865V54.9742L76.0794 55.2671L76.7865 54.56ZM76.7865 9.056L76.1565 8.27944L75.7865 8.57959V9.056H76.7865ZM86.9625 0.799995V-0.200005H86.6079L86.3325 0.0234337L86.9625 0.799995ZM132.275 0.799995L132.905 0.0234337L132.629 -0.200005H132.275V0.799995ZM141.737 9.75647L146.825 14.9405L148.252 13.5395L143.164 8.35553L141.737 9.75647ZM146.538 14.24V59.648H148.538V14.24H146.538ZM146.904 58.875L136.728 67.227L137.997 68.773L148.173 60.421L146.904 58.875ZM137.363 67H92.0505V69H137.363V67ZM92.6849 67.227L82.5089 58.875L81.2401 60.421L91.4161 68.773L92.6849 67.227ZM82.5816 58.9409L77.4936 53.8529L76.0794 55.2671L81.1674 60.3551L82.5816 58.9409ZM77.7865 54.56V9.056H75.7865V54.56H77.7865ZM77.4165 9.83256L87.5925 1.57656L86.3325 0.0234337L76.1565 8.27944L77.4165 9.83256ZM86.9625 1.8H132.275V-0.200005H86.9625V1.8ZM131.644 1.57656L141.82 9.83256L143.081 8.27944L132.905 0.0234337L131.644 1.57656ZM206.971 40.544L207.679 39.8369L207.386 39.544H206.971V40.544ZM212.059 45.632H213.059V45.2178L212.767 44.9249L212.059 45.632ZM212.059 68V69H213.059V68H212.059ZM157.819 68L157.112 68.7071L157.405 69H157.819V68ZM152.731 62.912H151.731V63.3262L152.024 63.6191L152.731 62.912ZM152.731 0.799995V-0.200005H151.731V0.799995H152.731ZM185.083 0.799995L185.797 0.0995278L185.503 -0.200005H185.083V0.799995ZM190.171 5.984H191.171V5.57525L190.885 5.28353L190.171 5.984ZM190.171 40.544H189.171V41.544H190.171V40.544ZM206.264 41.2511L211.352 46.3391L212.767 44.9249L207.679 39.8369L206.264 41.2511ZM211.059 45.632V68H213.059V45.632H211.059ZM212.059 67H157.819V69H212.059V67ZM158.527 67.2929L153.439 62.2049L152.024 63.6191L157.112 68.7071L158.527 67.2929ZM153.731 62.912V0.799995H151.731V62.912H153.731ZM152.731 1.8H185.083V-0.200005H152.731V1.8ZM184.37 1.50046L189.458 6.68447L190.885 5.28353L185.797 0.0995278L184.37 1.50046ZM189.171 5.984V40.544H191.171V5.984H189.171ZM190.171 41.544H206.971V39.544H190.171V41.544ZM261.035 27.104V28.104H262.035V27.104H261.035ZM255.563 27.104V26.104H254.563V27.104H255.563ZM255.563 41.792H254.563V42.792H255.563V41.792ZM255.947 41.792L256.654 41.0849L256.361 40.792H255.947V41.792ZM261.035 46.88H262.035V46.4658L261.742 46.1729L261.035 46.88ZM261.035 68V69H262.035V68H261.035ZM220.523 68L219.816 68.7071L220.109 69H220.523V68ZM215.435 62.912H214.435V63.3262L214.728 63.6191L215.435 62.912ZM215.435 41.792V40.792H214.435V41.792H215.435ZM221.003 41.792V42.792H222.003V41.792H221.003ZM221.003 27.104H222.003V26.104H221.003V27.104ZM220.523 27.104L219.816 27.8111L220.109 28.104H220.523V27.104ZM215.435 22.016H214.435V22.4302L214.728 22.7231L215.435 22.016ZM215.435 0.799995V-0.200005H214.435V0.799995H215.435ZM255.947 0.799995L256.661 0.0995278L256.367 -0.200005H255.947V0.799995ZM261.035 5.984H262.035V5.57525L261.749 5.28353L261.035 5.984ZM261.035 26.104H255.563V28.104H261.035V26.104ZM254.563 27.104V41.792H256.563V27.104H254.563ZM255.563 42.792H255.947V40.792H255.563V42.792ZM255.24 42.4991L260.328 47.5871L261.742 46.1729L256.654 41.0849L255.24 42.4991ZM260.035 46.88V68H262.035V46.88H260.035ZM261.035 67H220.523V69H261.035V67ZM221.23 67.2929L216.142 62.2049L214.728 63.6191L219.816 68.7071L221.23 67.2929ZM216.435 62.912V41.792H214.435V62.912H216.435ZM215.435 42.792H221.003V40.792H215.435V42.792ZM222.003 41.792V27.104H220.003V41.792H222.003ZM221.003 26.104H220.523V28.104H221.003V26.104ZM221.23 26.3969L216.142 21.3089L214.728 22.7231L219.816 27.8111L221.23 26.3969ZM216.435 22.016V0.799995H214.435V22.016H216.435ZM215.435 1.8H255.947V-0.200005H215.435V1.8ZM255.234 1.50046L260.322 6.68447L261.749 5.28353L256.661 0.0995278L255.234 1.50046ZM260.035 5.984V27.104H262.035V5.984H260.035ZM336.527 14.24H337.527V13.8258L337.234 13.5329L336.527 14.24ZM336.527 36.032V37.032H337.527V36.032H336.527ZM334.991 36.032V35.032H332.677L334.263 36.7174L334.991 36.032ZM336.527 37.664H337.527V37.2674L337.255 36.9786L336.527 37.664ZM336.527 59.648L337.162 60.421L337.527 60.1209V59.648H336.527ZM326.351 68V69H326.709L326.986 68.773L326.351 68ZM281.039 68L280.405 68.773L280.681 69H281.039V68ZM270.863 59.648L270.156 60.3551L270.191 60.3898L270.229 60.421L270.863 59.648ZM265.775 54.56H264.775V54.9742L265.068 55.2671L265.775 54.56ZM265.775 9.152L265.141 8.37901L264.775 8.67906V9.152H265.775ZM275.951 0.799995V-0.200005H275.593L275.317 0.0270138L275.951 0.799995ZM321.263 0.799995L321.898 0.0270138L321.621 -0.200005H321.263V0.799995ZM331.439 9.152L332.146 8.44489L332.112 8.41017L332.074 8.37901L331.439 9.152ZM335.527 14.24V36.032H337.527V14.24H335.527ZM336.527 35.032H334.991V37.032H336.527V35.032ZM334.263 36.7174L335.799 38.3494L337.255 36.9786L335.719 35.3466L334.263 36.7174ZM335.527 37.664V59.648H337.527V37.664H335.527ZM335.893 58.875L325.717 67.227L326.986 68.773L337.162 60.421L335.893 58.875ZM326.351 67H281.039V69H326.351V67ZM281.674 67.227L271.498 58.875L270.229 60.421L280.405 68.773L281.674 67.227ZM271.57 58.9409L266.482 53.8529L265.068 55.2671L270.156 60.3551L271.57 58.9409ZM266.775 54.56V9.152H264.775V54.56H266.775ZM266.41 9.92498L276.586 1.57298L275.317 0.0270138L265.141 8.37901L266.41 9.92498ZM275.951 1.8H321.263V-0.200005H275.951V1.8ZM320.629 1.57298L330.805 9.92498L332.074 8.37901L321.898 0.0270138L320.629 1.57298ZM330.732 9.8591L335.82 14.9471L337.234 13.5329L332.146 8.44489L330.732 9.8591Z"
            fill="url(#paint1_linear_4520_19004)"
            fillOpacity="0.34"
            mask="url(#path-1-outside-1_4520_19004)"
          />
          <defs>
            <motion.radialGradient
              initial={{
                gradientTransform:
                  "translate(6.92624 2.32964) rotate(43.1464) scale(74.0459 298.389)",
              }}
              animate={{
                gradientTransform:
                  "translate(275.664 0.747253) rotate(38.5924) scale(86.2525 339.116)",
              }}
              transition={radialGradientTransition}
              id="paint0_radial_4520_19004"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(6.92624 2.32964) rotate(43.1464) scale(74.0459 298.389)"
            >
              <stop stopColor="#CA88FF" />
              <stop offset="1" stopColor="#3F1767" />
            </motion.radialGradient>
            <linearGradient
              id="paint1_linear_4520_19004"
              x1="3.23224"
              y1="2.32967"
              x2="333.984"
              y2="74.2153"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B366FF" />
              <stop offset="1" stopColor="#401868" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className={styles.oHolicWhite}
          width="326"
          height="60"
          viewBox="0 0 326 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80.4118 3.8316L76 7.65357L76.0184 29.9459L76.0369 52.2378L80.4898 56.1189L84.9427 60L106.06 59.9862L127.176 59.9723L131.578 56.105L135.979 52.2378L135.989 29.9446L136 7.65147L131.594 3.82574L127.187 0L106.005 0.00460965L84.8235 0.00965465L80.4118 3.8316ZM103.451 29.7902V49.0909H106H108.549V29.7902V10.4895H106H103.451V29.7902Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 30V60H14.183H28.366V48.6713V37.3427H31H33.634V48.6713V60H47.817H62V30V0H47.817H33.634V9.23077V18.4615H31H28.366V9.23077V0H14.183H0V30Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M268.523 4.69594L264 8.39187V30.1004V51.809L268.533 55.569L273.067 59.3289H295.019H316.971L321.485 55.6081L326 51.8873V42.3516V32.8158H311.724H297.447V40.7697V48.7237H295H292.553V29.9605V11.1974H295H297.447V19.1513V27.1053H311.724H326V17.7539V8.40288L321.528 4.70124L317.056 1H295.051H273.045L268.523 4.69594Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M150 30V60H176.014H202.028V50.5594V41.1189H190.699H179.371V20.5594V0H164.685H150V30Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M214 8.81119V17.6224H216.937H219.874V30V42.3776H216.937H214V51.1888V60H232.881H251.762V51.1888V42.3776H249.035H246.308V30V17.6224H249.035H251.762V8.81119V0H232.881H214V8.81119Z"
            fill="white"
          />
        </svg>
      </div>
      <Emoji />
    </div>
  );
}

function Emoji() {
  const [emojiIndex, setEmojiIndex] = useState(0);

  const emojis = [
    "/shocked with-sunglasses.png",
    "/Shocked face.png",
    "/Face with heart eyes.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEmojiIndex((previous) => {
        return (previous + 1) % 3;
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.emojiContainer}>
      <Image
        className={styles.emojiBackground}
        src="/emoji_bg.png"
        alt="Emoji background circle"
        width={128}
        height={131}
      />
      {emojis.map((src, index) => {
        return (
          <Image
            width={54}
            height={54}
            style={{ display: emojiIndex == index ? "block" : "none" }}
            className={styles.emoji}
            src={emojis[emojiIndex]}
            alt="emoji"
          />
        );
      })}
    </div>
  );
}
