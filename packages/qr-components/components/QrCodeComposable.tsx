import { generateQrCode, type QrCodeOptions } from "@teranes/qrcode";
import { computed, shallowRef } from "vue";
import { useImageView } from "../basic/image/ImageComposable";

export interface useQrCodeViewOptions extends QrCodeOptions {
  label?: string;
  showLabel?: boolean;
}

export function useQrCodeView(
  text: string,
  {
    type = "svg",
    margin = 1,
    width = 36,
    errorCorrectionLevel = "medium",
    colorLight = "#ffffffff",
    colorDark = "#000000ff",
    label = undefined,
    showLabel = true,
  }: useQrCodeViewOptions = {}
) {
  const ImageView = shallowRef();
  const labelText = computed(() =>
    label != null ? label : showLabel ? text : undefined
  );

  generateQrCode(text, {
    type,
    margin,
    width: 200,
    errorCorrectionLevel,
    colorDark,
    colorLight,
  })
    .then((dataUrl: string) => {
      ImageView.value = useImageView(dataUrl, {
        width,
        height: width,
        alt: text,
        title: labelText.value,
      });
    })
    .catch(() => {});

  return () => (
    <div class="inline-flex justify-center items-center">
      {ImageView.value && <ImageView.value class="!shadow-none" />}
    </div>
  );
}
