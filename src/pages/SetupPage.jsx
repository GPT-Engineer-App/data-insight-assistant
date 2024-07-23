import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SetupPage = () => {
  const [integrations, setIntegrations] = useState({
    slack: false,
    zoom: false,
    teams: false,
  });

  const handleIntegrationChange = (integration) => {
    setIntegrations((prev) => ({ ...prev, [integration]: !prev[integration] }));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Setup Analyst Assistant</h1>
      <Tabs defaultValue="integrations">
        <TabsList className="mb-4">
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="data-connectors">Data Connectors</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
        </TabsList>
        <TabsContent value="integrations">
          <h2 className="text-2xl font-semibold mb-4">Configure Integrations</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="slack"
                checked={integrations.slack}
                onCheckedChange={() => handleIntegrationChange("slack")}
              />
              <Label htmlFor="slack">Slack</Label>
            </div>
            {integrations.slack && (
              <Input placeholder="Slack API Key" className="max-w-md" />
            )}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="zoom"
                checked={integrations.zoom}
                onCheckedChange={() => handleIntegrationChange("zoom")}
              />
              <Label htmlFor="zoom">Zoom</Label>
            </div>
            {integrations.zoom && (
              <Input placeholder="Zoom API Key" className="max-w-md" />
            )}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="teams"
                checked={integrations.teams}
                onCheckedChange={() => handleIntegrationChange("teams")}
              />
              <Label htmlFor="teams">Microsoft Teams</Label>
            </div>
            {integrations.teams && (
              <Input placeholder="Microsoft Teams API Key" className="max-w-md" />
            )}
          </div>
        </TabsContent>
        <TabsContent value="data-connectors">
          <h2 className="text-2xl font-semibold mb-4">Set Up Data Connectors</h2>
          <div className="space-y-4 max-w-md">
            <Input placeholder="Database URL" />
            <Input placeholder="Username" />
            <Input type="password" placeholder="Password" />
          </div>
        </TabsContent>
        <TabsContent value="authentication">
          <h2 className="text-2xl font-semibold mb-4">User Authentication and Authorization</h2>
          <div className="space-y-4 max-w-md">
            <Input placeholder="Admin Email" />
            <Input type="password" placeholder="Admin Password" />
            <Input placeholder="Role (e.g., Admin, User)" />
          </div>
        </TabsContent>
      </Tabs>
      <Button className="mt-8">Save Configuration</Button>
    </div>
  );
};

export default SetupPage;