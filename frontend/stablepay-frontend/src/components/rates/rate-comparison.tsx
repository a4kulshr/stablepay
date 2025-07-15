"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, ArrowUpDown, Clock, DollarSign, TrendingUp } from "lucide-react";

// Mock data for payment providers
const mockProviders = [
  {
    id: 1,
    name: "FastPay",
    logo: "🚀",
    fee: 0.5,
    feeType: "percentage",
    processingTime: "2-5 mins",
    processingTimeMinutes: 3.5,
    payout: 99.5,
    rating: 4.8,
    features: ["Instant", "Low Fee"],
    isBest: true,
  },
  {
    id: 2,
    name: "SecureTransfer",
    logo: "🔒",
    fee: 1.2,
    feeType: "percentage",
    processingTime: "5-10 mins",
    processingTimeMinutes: 7.5,
    payout: 98.8,
    rating: 4.6,
    features: ["Secure", "Reliable"],
    isBest: false,
  },
  {
    id: 3,
    name: "GlobalPay",
    logo: "🌍",
    fee: 0.8,
    feeType: "percentage",
    processingTime: "1-3 mins",
    processingTimeMinutes: 2,
    payout: 99.2,
    rating: 4.7,
    features: ["Global", "Fast"],
    isBest: false,
  },
  {
    id: 4,
    name: "CryptoBridge",
    logo: "⚡",
    fee: 2.0,
    feeType: "fixed",
    processingTime: "10-15 mins",
    processingTimeMinutes: 12.5,
    payout: 98.0,
    rating: 4.4,
    features: ["Crypto Native", "DeFi"],
    isBest: false,
  },
  {
    id: 5,
    name: "SwiftRoute",
    logo: "💨",
    fee: 0.3,
    feeType: "percentage",
    processingTime: "3-7 mins",
    processingTimeMinutes: 5,
    payout: 99.7,
    rating: 4.9,
    features: ["Lowest Fee", "Swift"],
    isBest: false,
  },
];

type SortField = "name" | "fee" | "processingTime" | "payout" | "rating";
type SortOrder = "asc" | "desc";

export function RateComparison() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>("payout");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [selectedAmount, setSelectedAmount] = useState("100");

  const filteredAndSortedProviders = useMemo(() => {
    const filtered = mockProviders.filter(provider =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    filtered.sort((a, b) => {
      let aValue: number;
      let bValue: number;

      switch (sortField) {
        case "name":
          return sortOrder === "asc" 
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        case "fee":
          aValue = a.fee;
          bValue = b.fee;
          break;
        case "processingTime":
          aValue = a.processingTimeMinutes;
          bValue = b.processingTimeMinutes;
          break;
        case "payout":
          aValue = a.payout;
          bValue = b.payout;
          break;
        case "rating":
          aValue = a.rating;
          bValue = b.rating;
          break;
        default:
          return 0;
      }

      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });

    return filtered;
  }, [searchTerm, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };

  const calculateFinalAmount = (provider: typeof mockProviders[0]) => {
    const amount = parseFloat(selectedAmount);
    if (provider.feeType === "percentage") {
      return amount * (provider.payout / 100);
    } else {
      return amount - provider.fee;
    }
  };

  const SortButton = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 -ml-3 text-left justify-start"
      onClick={() => handleSort(field)}
    >
      {children}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search providers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Select value={selectedAmount} onValueChange={setSelectedAmount}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="100">$100 USD</SelectItem>
              <SelectItem value="500">$500 USD</SelectItem>
              <SelectItem value="1000">$1000 USD</SelectItem>
              <SelectItem value="5000">$5000 USD</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block">
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">
                  <SortButton field="name">Provider</SortButton>
                </TableHead>
                <TableHead>
                  <SortButton field="fee">Fee</SortButton>
                </TableHead>
                <TableHead>
                  <SortButton field="processingTime">Processing Time</SortButton>
                </TableHead>
                <TableHead>
                  <SortButton field="payout">You Receive</SortButton>
                </TableHead>
                <TableHead>
                  <SortButton field="rating">Rating</SortButton>
                </TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedProviders.map((provider, index) => (
                <motion.div
                  key={provider.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ display: "contents" }}
                >
                  <TableRow
                    className={`group hover:bg-muted/50 ${provider.isBest ? "bg-green-50/50 dark:bg-green-900/10" : ""}`}
                  >
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{provider.logo}</span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span>{provider.name}</span>
                          {provider.isBest && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                              Best Rate
                            </Badge>
                          )}
                        </div>
                        <div className="flex space-x-1 mt-1">
                          {provider.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {provider.feeType === "percentage" ? `${provider.fee}%` : `$${provider.fee}`}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{provider.processingTime}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold text-green-600 dark:text-green-400">
                      ${calculateFinalAmount(provider).toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span>{provider.rating}/5</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      Select Route
                    </Button>
                  </TableCell>
                  </TableRow>
                </motion.div>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden grid gap-4">
        {filteredAndSortedProviders.map((provider, index) => (
          <motion.div
            key={provider.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`relative ${provider.isBest ? "ring-2 ring-green-500" : ""}`}>
              {provider.isBest && (
                <div className="absolute -top-2 left-4">
                  <Badge className="bg-green-500 text-white">
                    Best Rate
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{provider.logo}</span>
                    <span>{provider.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      ${calculateFinalAmount(provider).toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">You receive</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Fee</div>
                    <div className="font-medium">
                      {provider.feeType === "percentage" ? `${provider.fee}%` : `$${provider.fee}`}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Processing Time</div>
                    <div className="font-medium">{provider.processingTime}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {provider.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm">
                    <TrendingUp className="h-4 w-4 inline mr-1" />
                    {provider.rating}/5
                  </div>
                </div>
                
                <Button className="w-full mt-4">
                  Select Route
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 