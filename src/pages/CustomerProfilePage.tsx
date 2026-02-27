import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { User, Upload, Shield, FileText, Camera } from 'lucide-react';

export default function CustomerProfilePage() {
  const [licenseUploaded, setLicenseUploaded] = useState(false);
  const [idUploaded, setIdUploaded] = useState(false);

  const profile = {
    name: 'Alex Johnson',
    email: 'alex@email.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 2026',
    totalRides: 12,
    totalSpent: 4200,
    verified: false,
  };

  const documents = [
    {
      id: 'license',
      name: 'Driving License',
      icon: FileText,
      required: true,
      uploaded: licenseUploaded,
      status: licenseUploaded ? 'Under Review' : 'Required',
    },
    {
      id: 'id-proof',
      name: 'Government ID',
      icon: Shield,
      required: true,
      uploaded: idUploaded,
      status: idUploaded ? 'Under Review' : 'Required',
    },
    {
      id: 'selfie',
      name: 'Profile Photo',
      icon: Camera,
      required: false,
      uploaded: false,
      status: 'Optional',
    },
  ];

  const handleUpload = (docId: string) => {
    if (docId === 'license') setLicenseUploaded(true);
    if (docId === 'id-proof') setIdUploaded(true);
    toast.success('Document uploaded! Under review.');
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-2">Account</p>
          <h1 className="font-display text-5xl md:text-6xl">MY PROFILE</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 text-center lg:col-span-1"
          >
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <User className="h-12 w-12 text-primary" />
            </div>
            <h2 className="font-display text-2xl">{profile.name}</h2>
            <p className="text-sm text-muted-foreground">{profile.email}</p>
            <p className="text-sm text-muted-foreground">{profile.phone}</p>
            <Badge
              variant="outline"
              className={`mt-3 ${
                profile.verified
                  ? 'border-emerald-500/30 text-emerald-400'
                  : 'border-amber-500/30 text-amber-400'
              }`}
            >
              {profile.verified ? '✓ Verified' : '⏳ Pending Verification'}
            </Badge>
            <p className="text-xs text-muted-foreground mt-4">Member since {profile.joinDate}</p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="glass rounded-lg p-3">
                <p className="font-display text-2xl text-primary">{profile.totalRides}</p>
                <p className="text-xs text-muted-foreground">Total Rides</p>
              </div>
              <div className="glass rounded-lg p-3">
                <p className="font-display text-2xl text-primary">${profile.totalSpent}</p>
                <p className="text-xs text-muted-foreground">Total Spent</p>
              </div>
            </div>
          </motion.div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 lg:col-span-2"
          >
            <h3 className="font-display text-2xl mb-2">DOCUMENT VERIFICATION</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Upload required documents to verify your identity and unlock booking.
            </p>

            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 rounded-xl bg-[hsl(var(--surface))]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <doc.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {doc.required ? 'Required' : 'Optional'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className={
                        doc.uploaded
                          ? 'border-emerald-500/30 text-emerald-400'
                          : doc.required
                          ? 'border-amber-500/30 text-amber-400'
                          : 'border-border text-muted-foreground'
                      }
                    >
                      {doc.status}
                    </Badge>
                    {!doc.uploaded && (
                      <Button size="sm" variant="outline" onClick={() => handleUpload(doc.id)}>
                        <Upload className="mr-1 h-3 w-3" /> Upload
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-xs text-muted-foreground">
                <Shield className="inline h-3 w-3 text-primary mr-1" />
                Your documents are encrypted and stored securely. We only use them for identity verification.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
