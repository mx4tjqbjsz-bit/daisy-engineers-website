# DNS Records for daisyconsulting.co.za

## Option 1: Netlify Nameservers (RECOMMENDED)

Replace your domain's nameservers with these:

```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

**Where to find in Netlify:**
1. Domain settings → DNS
2. Click "Set up Netlify DNS"
3. Netlify will show you these nameservers

---

## Option 2: A and CNAME Records

If you prefer to keep your current DNS provider, add these records:

### A Record
| Type | Host | Points to | TTL |
|------|------|-----------|-----|
| A | @ | 75.2.60.5 | 3600 |

### CNAME Record
| Type | Host | Points to | TTL |
|------|------|-----------|-----|
| CNAME | www | daisyconsulting.co.za | 3600 |

**Note:** The IP address (75.2.60.5) is Netlify's load balancer. Get the correct one from your Netlify dashboard.

---

## Email MX Records (Zoho Mail - FREE)

Add these MX records for email:

| Type | Host | Points to | Priority | TTL |
|------|------|-----------|----------|-----|
| MX | @ | mx.zoho.com | 10 | 3600 |
| MX | @ | mx2.zoho.com | 20 | 3600 |
| MX | @ | mx3.zoho.com | 50 | 3600 |

### SPF Record (for email deliverability)
| Type | Host | Value | TTL |
|------|------|-------|-----|
| TXT | @ | v=spf1 include:zoho.com ~all | 3600 |

### DKIM Record (Zoho will provide this)
Add the DKIM record Zoho gives you during setup.

---

## Email MX Records (Google Workspace)

| Type | Host | Points to | Priority | TTL |
|------|------|-----------|----------|-----|
| MX | @ | aspmx.l.google.com | 1 | 3600 |
| MX | @ | alt1.aspmx.l.google.com | 5 | 3600 |
| MX | @ | alt2.aspmx.l.google.com | 5 | 3600 |
| MX | @ | alt3.aspmx.l.google.com | 10 | 3600 |
| MX | @ | alt4.aspmx.l.google.com | 10 | 3600 |

### SPF Record
| Type | Host | Value | TTL |
|------|------|-------|-----|
| TXT | @ | v=spf1 include:_spf.google.com ~all | 3600 |

---

## How to Add DNS Records

### At HOSTAFRICA:
1. Log into client area
2. Go to Domains → My Domains
3. Click "Manage" next to daisyconsulting.co.za
4. Click "DNS Management"
5. Add records as shown above

### At Domains.co.za:
1. Log into account
2. Go to Domain Manager
3. Click daisyconsulting.co.za
4. Click "DNS Management"
5. Add records

### At Any Registrar:
1. Look for "DNS Management", "Nameservers", or "Advanced DNS"
2. Add the records shown above
3. Save changes

---

## Verification

Check DNS propagation:
- https://dnschecker.org
- https://whatsmydns.net

Enter your domain and check if records are showing globally.
