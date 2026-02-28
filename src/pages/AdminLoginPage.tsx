import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bike, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { toast } from 'sonner';

const ADMIN_PHONE = '9876543210';
const ADMIN_OTP = '1234';

export default function AdminLoginPage() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (phone !== ADMIN_PHONE) {
      toast.error('Unauthorized phone number');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
      toast.success('OTP sent to +91 ' + phone);
    }, 1000);
  };

  const handleVerifyOTP = () => {
    if (otp !== ADMIN_OTP) {
      toast.error('Invalid OTP. Try 1234');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('ridex_admin', 'true');
      toast.success('Welcome, Admin!');
      navigate('/admin');
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 glass rounded-3xl p-10 w-full max-w-md mx-6"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="font-display text-4xl">
            ADMIN <span className="text-gradient">LOGIN</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Secure access to RideX management
          </p>
        </div>

        {step === 'phone' ? (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone Number</label>
              <div className="flex gap-2">
                <div className="bg-secondary rounded-lg px-4 py-3 text-sm text-muted-foreground flex-shrink-0">
                  +91
                </div>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="bg-secondary border-none"
                  maxLength={10}
                />
              </div>
            </div>
            <Button
              className="w-full font-bold glow-strong"
              size="lg"
              onClick={handleSendOTP}
              disabled={phone.length !== 10 || loading}
            >
              {loading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                  <Lock className="h-4 w-4" />
                </motion.div>
              ) : (
                'Send OTP'
              )}
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Enter OTP</label>
              <p className="text-sm text-muted-foreground">
                Code sent to +91 {phone}
              </p>
              <div className="flex justify-center">
                <InputOTP maxLength={4} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
            <Button
              className="w-full font-bold glow-strong"
              size="lg"
              onClick={handleVerifyOTP}
              disabled={otp.length !== 4 || loading}
            >
              {loading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                  <Lock className="h-4 w-4" />
                </motion.div>
              ) : (
                'Verify & Login'
              )}
            </Button>
            <button
              onClick={() => { setStep('phone'); setOtp(''); }}
              className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Change phone number
            </button>
          </motion.div>
        )}

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            <Bike className="h-3 w-3 inline mr-1" />
            RideX Admin Portal • Authorized Personnel Only
          </p>
        </div>
      </motion.div>
    </div>
  );
}
