"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FEEDBACK_TYPES = [
  { value: "bug", label: "Bug Report" },
  { value: "feature", label: "Feature Request" },
  { value: "general", label: "General Feedback" },
  { value: "other", label: "Other" },
];

export default function Feedback() {
  const [feedbackType, setFeedbackType] = useState("");
  const [description, setDescription] = useState("");
  const [appVersion, setAppVersion] = useState("");
  const [contact, setContact] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackType || !description) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feedbackType,
          description,
          appVersion,
          contact,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit. Please try again or email info@unshackledpursuit.com");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Spatialis"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-semibold">Spatialis</span>
            </Link>
          </div>

          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-muted-foreground mb-8">
              Your feedback has been received. We appreciate you helping us improve Spatialis.
            </p>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link href="/support">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={16} />
              Back to Support
            </Button>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Spatialis"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-semibold">Spatialis</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-2">Send Feedback</h1>
        <p className="text-muted-foreground mb-8">
          Help improve Spatialis. Your feedback shapes the future of spatial drawing.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Feedback Type */}
          <div>
            <label className="block text-sm font-medium mb-2">
              What type of feedback do you have? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {FEEDBACK_TYPES.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFeedbackType(type.value)}
                  className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                    feedbackType === type.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Please describe your feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us what's on your mind..."
              className="w-full h-32 p-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary resize-none"
              required
            />
          </div>

          {/* App Version */}
          <div>
            <label className="block text-sm font-medium mb-2">
              App version <span className="text-muted-foreground text-xs">(found in About section)</span>
            </label>
            <input
              type="text"
              value={appVersion}
              onChange={(e) => setAppVersion(e.target.value)}
              placeholder="e.g., 1.0.0"
              className="w-full p-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email or X handle <span className="text-muted-foreground text-xs">(optional, if you&apos;d like a response)</span>
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="@username or email"
              className="w-full p-3 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
            />
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={!feedbackType || !description || submitting}
            className="w-full py-6 text-lg"
          >
            {submitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Feedback
              </>
            )}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          You can also email us at{" "}
          <a href="mailto:info@unshackledpursuit.com" className="text-primary hover:underline">
            info@unshackledpursuit.com
          </a>
        </p>
      </div>
    </div>
  );
}
