export default function FeatureUnavailable() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
        <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 text-2xl">
          🕌
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Dalam Tahap Pengembangan
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          Fitur ini sedang kami persiapkan agar dapat digunakan dengan baik dan
          memberikan manfaat yang maksimal.  
          <span className="block mt-2 font-medium text-emerald-700">
            InsyaAllah segera tersedia.
          </span>
        </p>
      </div>
    </div>
  );
}