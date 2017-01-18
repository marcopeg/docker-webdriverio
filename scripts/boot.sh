
humble info

echo ""
echo ""
echo "### Tearing down existing project..."
echo ""
humble down

echo ""
echo ""
echo "### Build and boot new project..."
echo ""
humble up -d --build

echo ""
echo ""
echo "### Attaching to the logs:"
echo ""
humble logs -f wdio
