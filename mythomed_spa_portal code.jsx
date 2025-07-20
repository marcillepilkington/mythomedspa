// ... previous imports remain unchanged
import { Flower, DoorOpen, ScrollText, RotateCcw } from "lucide-react";

export default function MythoMedSpa() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-rose-50 flex flex-col items-center justify-center p-10 space-y-10">
      {/* ... existing rooms above */}

      {/* Fifth Room: Exit Integration Chamber */}
      <Card className="max-w-2xl w-full shadow-xl rounded-xl relative overflow-hidden">
        <CardContent className="p-6 space-y-6 text-center relative">
          <h2 className="text-2xl font-bold text-violet-800 flex justify-center items-center gap-2">
            <DoorOpen className="w-6 h-6 text-violet-600 animate-fadeIn" /> Exit Integration Chamber
          </h2>
          <audio autoPlay loop>
            <source src="/sounds/soft-bell-veil.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            style={{ background: "radial-gradient(circle at center, rgba(216,191,216,0.3), transparent 75%)" }}
          />

          <p className="text-violet-900 relative z-10">
            As your mythic cellular system recalibrates, this chamber seals the work with breath, silence, and soft neural recalibration.
          </p>
          <ul className="text-left text-violet-900 list-disc list-inside space-y-2 mt-4 relative z-10">
            <li><strong>Temporal Re-grounding</strong> — Timelines harmonized. Emails can wait.</li>
            <li><strong>Memory Softening</strong> — Harsh edges dissolved through frequency diffusion.</li>
            <li><strong>Harmonic Exit Scroll</strong> — Receive your field summary via mythopoetic glyph.</li>
          </ul>

          {/* Closing Scroll */}
          <motion.div
            className="mt-6 text-center text-violet-700 italic relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <ScrollText className="w-6 h-6 mx-auto mb-2 text-violet-500 animate-pulse" />
            “Your soul has rehydrated. Your myth has been moisturized. You may now return to consensus gently, with twinkle intact.”
          </motion.div>

          {/* Re-enter Button */}
          <div className="mt-8 flex justify-center relative z-10">
            <button className="bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 text-lg">
              <RotateCcw className="w-5 h-5" /> Re-enter the Matrix
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
