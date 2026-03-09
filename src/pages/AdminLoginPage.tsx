import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { toast } from 'sonner';

const ADMIN_PHONE = '9100438272';
const ADMIN_OTP = '1234';

export default function AdminLoginPage() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = () => {
    if (phone !== ADMIN_PHONE) { toast.error('Unauthorized phone number'); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep('otp'); toast.success('OTP sent to +91 ' + phone); }, 1000);
  };

  const handleVerifyOTP = () => {
    if (otp !== ADMIN_OTP) { toast.error('Invalid OTP. Try 1234'); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); localStorage.setItem('sriganesh_admin', 'true'); toast.success('Welcome, Admin!'); navigate('/admin'); }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 blur-[150px] rounded-full" />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 bg-card rounded-2xl border border-border/50 p-8 w-full max-w-md mx-6">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
            <Shield className="h-7 w-7 text-primary" />
          </div>
          <h1 className="font-display text-3xl">Admin Login</h1>
          <p className="text-sm text-muted-foreground mt-2">Secure access to Sri Ganesh management</p>
        </div>

        {step === 'phone' ? (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Phone Number</label>
              <div className="flex gap-2">
                <div className="bg-secondary rounded-xl px-4 py-3 text-sm text-muted-foreground flex-shrink-0">+91</div>
                <Input type="tel" placeholder="Enter phone number" value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="bg-secondary border-none" maxLength={10} />
              </div>
            </div>
            <Button className="w-full font-bold gold-shine text-primary-foreground border-0" size="lg"
              onClick={handleSendOTP} disabled={phone.length !== 10 || loading}>
              {loading ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Lock className="h-4 w-4" /></motion.div> : 'Send OTP'}
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
            <div className="space-y-3">
              <label className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">Enter OTP</label>
              <p className="text-sm text-muted-foreground">Code sent to +91 {phone}</p>
              <div className="flex justify-center">
                <InputOTP maxLength={4} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} /><InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
            <Button className="w-full font-bold gold-shine text-primary-foreground border-0" size="lg"
              onClick={handleVerifyOTP} disabled={otp.length !== 4 || loading}>
              {loading ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Lock className="h-4 w-4" /></motion.div> : 'Verify & Login'}
            </Button>
            <button onClick={() => { setStep('phone'); setOtp(''); }} className="w-full text-sm text-muted-foreground hover:text-primary transition-colors">← Change number</button>
          </motion.div>
        )}

        <div className="mt-6 pt-5 border-t border-border text-center">
          <p className="text-[11px] text-muted-foreground">
            Sri Ganesh Bike Rentals • Admin Portal • Authorized Personnel Only
          </p>
        </div>
      </motion.div>
    </div>
  );
}
