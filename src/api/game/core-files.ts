const CORE_FILES: string[] = [
    "header.png",
    "icon.png",
    "beds_bed.png",
    "beds_bed_fancy.png",
    "beds_bed_foot.png",
    "beds_bed_head.png",
    "beds_bed_side1.png",
    "beds_bed_side2.png",
    "beds_bed_side_bottom.png",
    "beds_bed_side_bottom_r.png",
    "beds_bed_side_top.png",
    "beds_bed_side_top_r.png",
    "beds_bed_top1.png",
    "beds_bed_top2.png",
    "beds_bed_top_bottom.png",
    "beds_bed_top_top.png",
    "beds_transparent.png",
    "boats_inventory.png",
    "boats_wield.png",
    "bones_bottom.png",
    "bones_front.png",
    "bones_rear.png",
    "bones_side.png",
    "bones_top.png",
    "bucket.png",
    "bucket_lava.png",
    "bucket_river_water.png",
    "bucket_water.png",
    "carts_cart.png",
    "carts_cart_front.png",
    "carts_cart_side.png",
    "carts_cart_top.png",
    "carts_rail_crossing.png",
    "carts_rail_crossing_brk.png",
    "carts_rail_crossing_pwr.png",
    "carts_rail_curved.png",
    "carts_rail_curved_brk.png",
    "carts_rail_curved_pwr.png",
    "carts_rail_straight.png",
    "carts_rail_straight_brk.png",
    "carts_rail_straight_pwr.png",
    "carts_rail_t_junction.png",
    "carts_rail_t_junction_brk.png",
    "carts_rail_t_junction_pwr.png",
    "creative_trash_icon.png",
    "character.png",
    "bubble.png",
    "crack_anylength.png",
    "default_acacia_bush_stem.png",
    "default_acacia_leaves.png",
    "default_acacia_leaves_simple.png",
    "default_acacia_sapling.png",
    "default_acacia_tree.png",
    "default_acacia_tree_top.png",
    "default_acacia_wood.png",
    "default_apple.png",
    "default_aspen_leaves.png",
    "default_aspen_sapling.png",
    "default_aspen_tree.png",
    "default_aspen_tree_top.png",
    "default_aspen_wood.png",
    "default_book.png",
    "default_book_written.png",
    "default_bookshelf.png",
    "default_bookshelf_slot.png",
    "default_brick.png",
    "default_bronze_block.png",
    "default_bronze_ingot.png",
    "default_bush_stem.png",
    "default_cactus_side.png",
    "default_cactus_top.png",
    "default_chest_front.png",
    "default_chest_lock.png",
    "default_chest_side.png",
    "default_chest_top.png",
    "default_clay.png",
    "default_clay_brick.png",
    "default_clay_lump.png",
    "default_cloud.png",
    "default_coal_block.png",
    "default_coal_lump.png",
    "default_cobble.png",
    "default_copper_block.png",
    "default_copper_ingot.png",
    "default_copper_lump.png",
    "default_coral_brown.png",
    "default_coral_orange.png",
    "default_coral_skeleton.png",
    "default_desert_cobble.png",
    "default_desert_sand.png",
    "default_desert_sandstone.png",
    "default_desert_sandstone_block.png",
    "default_desert_sandstone_brick.png",
    "default_desert_stone.png",
    "default_desert_stone_block.png",
    "default_desert_stone_brick.png",
    "default_diamond.png",
    "default_diamond_block.png",
    "default_dirt.png",
    "default_dry_grass.png",
    "default_dry_grass_1.png",
    "default_dry_grass_2.png",
    "default_dry_grass_3.png",
    "default_dry_grass_4.png",
    "default_dry_grass_5.png",
    "default_dry_grass_side.png",
    "default_dry_shrub.png",
    "default_fence_acacia_wood.png",
    "default_fence_aspen_wood.png",
    "default_fence_junglewood.png",
    "default_fence_overlay.png",
    "default_fence_pine_wood.png",
    "default_fence_wood.png",
    "default_flint.png",
    "default_footprint.png",
    "default_furnace_bottom.png",
    "default_furnace_fire_bg.png",
    "default_furnace_fire_fg.png",
    "default_furnace_front.png",
    "default_furnace_front_active.png",
    "default_furnace_side.png",
    "default_furnace_top.png",
    "default_glass.png",
    "default_glass_detail.png",
    "default_gold_block.png",
    "default_gold_ingot.png",
    "default_gold_lump.png",
    "default_grass.png",
    "default_grass_1.png",
    "default_grass_2.png",
    "default_grass_3.png",
    "default_grass_4.png",
    "default_grass_5.png",
    "default_grass_side.png",
    "default_gravel.png",
    "default_ice.png",
    "default_iron_lump.png",
    "default_item_smoke.png",
    "default_junglegrass.png",
    "default_jungleleaves.png",
    "default_jungleleaves_simple.png",
    "default_junglesapling.png",
    "default_jungletree.png",
    "default_jungletree_top.png",
    "default_junglewood.png",
    "default_key.png",
    "default_key_skeleton.png",
    "default_ladder_steel.png",
    "default_ladder_wood.png",
    "default_lava.png",
    "default_lava_flowing_animated.png",
    "default_lava_source_animated.png",
    "default_leaves.png",
    "default_leaves_simple.png",
    "default_mese_block.png",
    "default_mese_crystal.png",
    "default_mese_crystal_fragment.png",
    "default_mese_post_light_side.png",
    "default_mese_post_light_side_dark.png",
    "default_mese_post_light_top.png",
    "default_meselamp.png",
    "default_mineral_coal.png",
    "default_mineral_copper.png",
    "default_mineral_diamond.png",
    "default_mineral_gold.png",
    "default_mineral_iron.png",
    "default_mineral_mese.png",
    "default_mossycobble.png",
    "default_obsidian.png",
    "default_obsidian_block.png",
    "default_obsidian_brick.png",
    "default_obsidian_glass.png",
    "default_obsidian_glass_detail.png",
    "default_obsidian_shard.png",
    "default_paper.png",
    "default_papyrus.png",
    "default_pine_needles.png",
    "default_pine_sapling.png",
    "default_pine_tree.png",
    "default_pine_tree_top.png",
    "default_pine_wood.png",
    "default_rainforest_litter.png",
    "default_rainforest_litter_side.png",
    "default_river_water.png",
    "default_river_water_flowing_animated.png",
    "default_river_water_source_animated.png",
    "default_sand.png",
    "default_sandstone.png",
    "default_sandstone_block.png",
    "default_sandstone_brick.png",
    "default_sapling.png",
    "default_sign_steel.png",
    "default_sign_wall_steel.png",
    "default_sign_wall_wood.png",
    "default_sign_wood.png",
    "default_silver_sand.png",
    "default_silver_sandstone.png",
    "default_silver_sandstone_block.png",
    "default_silver_sandstone_brick.png",
    "default_snow.png",
    "default_snow_side.png",
    "default_snowball.png",
    "default_steel_block.png",
    "default_steel_ingot.png",
    "default_stick.png",
    "default_stone.png",
    "default_stone_block.png",
    "default_stone_brick.png",
    "default_tool_bronzeaxe.png",
    "default_tool_bronzepick.png",
    "default_tool_bronzeshovel.png",
    "default_tool_bronzesword.png",
    "default_tool_diamondaxe.png",
    "default_tool_diamondpick.png",
    "default_tool_diamondshovel.png",
    "default_tool_diamondsword.png",
    "default_tool_meseaxe.png",
    "default_tool_mesepick.png",
    "default_tool_meseshovel.png",
    "default_tool_mesesword.png",
    "default_tool_steelaxe.png",
    "default_tool_steelpick.png",
    "default_tool_steelshovel.png",
    "default_tool_steelsword.png",
    "default_tool_stoneaxe.png",
    "default_tool_stonepick.png",
    "default_tool_stoneshovel.png",
    "default_tool_stonesword.png",
    "default_tool_woodaxe.png",
    "default_tool_woodpick.png",
    "default_tool_woodshovel.png",
    "default_tool_woodsword.png",
    "default_torch_animated.png",
    "default_torch_on_ceiling_animated.png",
    "default_torch_on_floor.png",
    "default_torch_on_floor_animated.png",
    "default_tree.png",
    "default_tree_top.png",
    "default_water.png",
    "default_water_flowing_animated.png",
    "default_water_source_animated.png",
    "default_wood.png",
    "gui_formbg.png",
    "gui_furnace_arrow_bg.png",
    "gui_furnace_arrow_fg.png",
    "gui_hb_bg.png",
    "gui_hotbar.png",
    "gui_hotbar_selected.png",
    "heart.png",
    "player.png",
    "player_back.png",
    "wieldhand.png",
    "doors_blank.png",
    "doors_door_glass.png",
    "doors_door_obsidian_glass.png",
    "doors_door_steel.png",
    "doors_door_wood.png",
    "doors_item_glass.png",
    "doors_item_obsidian_glass.png",
    "doors_item_steel.png",
    "doors_item_wood.png",
    "doors_trapdoor.png",
    "doors_trapdoor_side.png",
    "doors_trapdoor_steel.png",
    "doors_trapdoor_steel_side.png",
    "dye_black.png",
    "dye_blue.png",
    "dye_brown.png",
    "dye_cyan.png",
    "dye_dark_green.png",
    "dye_dark_grey.png",
    "dye_green.png",
    "dye_grey.png",
    "dye_magenta.png",
    "dye_orange.png",
    "dye_pink.png",
    "dye_red.png",
    "dye_violet.png",
    "dye_white.png",
    "dye_yellow.png",
    "farming_bread.png",
    "farming_cotton.png",
    "farming_cotton_1.png",
    "farming_cotton_2.png",
    "farming_cotton_3.png",
    "farming_cotton_4.png",
    "farming_cotton_5.png",
    "farming_cotton_6.png",
    "farming_cotton_7.png",
    "farming_cotton_8.png",
    "farming_cotton_seed.png",
    "farming_desert_sand_soil.png",
    "farming_desert_sand_soil_wet.png",
    "farming_desert_sand_soil_wet_side.png",
    "farming_flour.png",
    "farming_soil.png",
    "farming_soil_wet.png",
    "farming_soil_wet_side.png",
    "farming_straw.png",
    "farming_tool_bronzehoe.png",
    "farming_tool_diamondhoe.png",
    "farming_tool_mesehoe.png",
    "farming_tool_steelhoe.png",
    "farming_tool_stonehoe.png",
    "farming_tool_woodhoe.png",
    "farming_wheat.png",
    "farming_wheat_1.png",
    "farming_wheat_2.png",
    "farming_wheat_3.png",
    "farming_wheat_4.png",
    "farming_wheat_5.png",
    "farming_wheat_6.png",
    "farming_wheat_7.png",
    "farming_wheat_8.png",
    "farming_wheat_seed.png",
    "fire_basic_flame.png",
    "fire_basic_flame_animated.png",
    "fire_flint_steel.png",
    "flowers_dandelion_white.png",
    "flowers_dandelion_yellow.png",
    "flowers_geranium.png",
    "flowers_mushroom_brown.png",
    "flowers_mushroom_red.png",
    "flowers_rose.png",
    "flowers_tulip.png",
    "flowers_viola.png",
    "flowers_waterlily.png",
    "flowers_waterlily_bottom.png",
    "pbj_pup_back.png",
    "pbj_pup_candies.png",
    "pbj_pup_candies_animated.png",
    "pbj_pup_front.png",
    "pbj_pup_jelly.png",
    "pbj_pup_sides.png",
    "screwdriver.png",
    "tnt_blast.png",
    "tnt_boom.png",
    "tnt_bottom.png",
    "tnt_gunpowder_burning_crossing_animated.png",
    "tnt_gunpowder_burning_curved_animated.png",
    "tnt_gunpowder_burning_straight_animated.png",
    "tnt_gunpowder_burning_t_junction_animated.png",
    "tnt_gunpowder_crossing.png",
    "tnt_gunpowder_curved.png",
    "tnt_gunpowder_inventory.png",
    "tnt_gunpowder_straight.png",
    "tnt_gunpowder_t_junction.png",
    "tnt_side.png",
    "tnt_smoke.png",
    "tnt_top.png",
    "tnt_top_burning.png",
    "tnt_top_burning_animated.png",
    "vessels_drinking_glass.png",
    "vessels_drinking_glass_inv.png",
    "vessels_glass_bottle.png",
    "vessels_glass_fragments.png",
    "vessels_shelf.png",
    "vessels_shelf_slot.png",
    "vessels_steel_bottle.png",
    "wool_black.png",
    "wool_blue.png",
    "wool_brown.png",
    "wool_cyan.png",
    "wool_dark_green.png",
    "wool_dark_grey.png",
    "wool_green.png",
    "wool_grey.png",
    "wool_magenta.png",
    "wool_orange.png",
    "wool_pink.png",
    "wool_red.png",
    "wool_violet.png",
    "wool_white.png",
    "wool_yellow.png",
    "xpanes_bar.png",
    "xpanes_bar_top.png",
    "xpanes_pane_half.png",
    "xpanes_space.png",
    "xpanes_white.png",
];

export { CORE_FILES };